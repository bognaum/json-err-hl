import setStyle from "./CSS/themes.scss.js";
import SyntaxHlFk from "./syntax-highlight-framework/syntax-hl-fk.js";

const version = "1.1.5";

const {
	token,
	nToken,
	spToken,
	rule,
	domain,
	seq,
	alter,
	q,
	not,
	spWrap,
	error,
	deb,
} = SyntaxHlFk.describeAPI;

const
	__main_ = rule(function(pc) {
		return seq(
			spWrap(r.subject.catch("Main. Expected subject.")),
			error("Main. Unexpected symbol after end of code.").q("*")
		)(pc);
	}),
	list = rule(function(pc) {
		return token("[").in("list__open")
			.break(
				seq(
					spWrap(r.subject.q("*/", spWrap(token(",").in("list__coma")))),
					token("]").in("list__close")
						.catch("List. Expected closing bracket ' ] '."),
				)
			).msg("List.")(pc);
			
	}),
	dict = rule(function(pc) {
		return spToken("{")
			.break(
				alter(
					spToken("}"),
					seq(
						seq(
							d.string_n.catch("Dict. Expected string name of field."),
							spToken(":").catch("Dict. Expected colon ' : '."),
							r.subject.catch("Dict. Expected subject - (null | boll | number | string | list | dict).")
						).q("*/", spToken(",")),
						spToken("}").catch("Dict. Expected closing curly ' } ' or coma ' , '."),
					),
				)
			).msg("Dict.")(pc);
	}),
	d = {
		string_v : domain("string_v" , function(pc) {
			return r.string(pc);
		}),
		string_n : domain("string_n" , function(pc) {
			return r.string(pc);
		}),
		slashed : domain("slashed", function(pc) {
			return token(
				'\\"'         ,
				"\\\\"        , 
				"\\/"         , 
				"\\b"         ,
				"\\f"         ,
				"\\n"         ,
				"\\r"         ,
				"\\t"         ,
				/\\u\d\d\d\d/y,
			)(pc);
		}),
		number          : domain("number", function(pc) {
			return token(/\b\d+\.|\.\d+\b|\b\d+\.?\d*\b/y)(pc);
		}),
		bool            : domain("bool", function(pc) {
			return token(/\btrue\b|\bfalse\b/y)(pc);
		}),
		_null           : domain("_null", function(pc) {
			return token(/\bnull\b/y)(pc);
		}),
	},
	r = {
		subject         : rule(function(pc) {
			return alter(
				d._null,
				d.bool,
				d.number,
				d.string_v,
				list,
				dict
			)(pc);
		}),
		string        : rule(function(pc) {
			return seq(
				token('"'),
				q(alter(d.slashed, nToken('"', "\n", "\\")), "*"),
				token('"').catch("String: invalid symbol"),
			)(pc);
		}),
		space           : rule(function(pc) {
			return token(/\s+/y)(pc);
		}),
	};

export default class JsonErrHlter extends SyntaxHlFk.Highlighter {
	constructor (clPref="json-err-hl") {
		super(__main_, clPref);
		setStyle(clPref);
	}

	get version () { return version; }

	getHighlighted (
		templ, firstLineNum=1, cssClasses="calm-clarified-theme") {
		return super.getHighlighted(templ, firstLineNum, cssClasses);
	}
}
