export default function setStyle(clPref) {

	const cssCode = `
	.${clPref}.calm-theme {
	  background-color: #222; }
	  .${clPref}.calm-theme .${clPref}__line-text {
	    color: #eee; }
	    .${clPref}.calm-theme .${clPref}__line-text .string_v {
	      color: #ddc; }
	    .${clPref}.calm-theme .${clPref}__line-text .string_n {
	      color: #78a; }
	    .${clPref}.calm-theme .${clPref}__line-text .slashed {
	      color: #f90; }
	    .${clPref}.calm-theme .${clPref}__line-text .number {
	      color: #f90; }
	    .${clPref}.calm-theme .${clPref}__line-text .bool {
	      color: #f90; }
	    .${clPref}.calm-theme .${clPref}__line-text ._null {
	      color: #98f; }
	    .${clPref}.calm-theme .${clPref}__line-text .error {
	      color: #fff;
	      background-color: #e48;
	      box-shadow: inset 0 0 2px #fff; }

	.${clPref}.calm-clarified-theme .${clPref}__line .${clPref}__line-number {
	  background-color: #444; }

	.${clPref}.calm-clarified-theme .${clPref}__line-text {
	  color: #eee; }
	  .${clPref}.calm-clarified-theme .${clPref}__line-text .string_v {
	    color: #ddc; }
	  .${clPref}.calm-clarified-theme .${clPref}__line-text .string_n {
	    color: #78a; }
	  .${clPref}.calm-clarified-theme .${clPref}__line-text .bool {
	    color: #fb6; }
	  .${clPref}.calm-clarified-theme .${clPref}__line-text .number {
	    color: #fb6; }
	  .${clPref}.calm-clarified-theme .${clPref}__line-text .slashed {
	    color: #fb6; }
	  .${clPref}.calm-clarified-theme .${clPref}__line-text ._null {
	    color: #98f; }
	  .${clPref}.calm-clarified-theme .${clPref}__line-text .error {
	    color: #fff;
	    background-color: #e48;
	    box-shadow: inset 0 0 2px #fff; }

	.${clPref}.monokai-theme {
	  background-color: #333; }
	  .${clPref}.monokai-theme .${clPref}__line-text .string_n {
	    color: #3bd; }
	  .${clPref}.monokai-theme .${clPref}__line-text .string_v {
	    color: #da5; }
	  .${clPref}.monokai-theme .${clPref}__line-text .slashed {
	    color: #98f; }
	  .${clPref}.monokai-theme .${clPref}__line-text .number {
	    color: #98f; }
	  .${clPref}.monokai-theme .${clPref}__line-text .bool {
	    color: #98f; }
	  .${clPref}.monokai-theme .${clPref}__line-text ._null {
	    color: #e48; }
	  .${clPref}.monokai-theme .${clPref}__line-text .error {
	    color: #fff;
	    background-color: #e48;
	    box-shadow: inset 0 0 2px #fff; }

	.${clPref}.monokai-clarified-theme .${clPref}__line-text .string_n {
	  color: #3bd; }

	.${clPref}.monokai-clarified-theme .${clPref}__line-text .string_v {
	  color: #da5; }

	.${clPref}.monokai-clarified-theme .${clPref}__line-text .slashed {
	  color: #98f; }

	.${clPref}.monokai-clarified-theme .${clPref}__line-text .number {
	  color: #98f; }

	.${clPref}.monokai-clarified-theme .${clPref}__line-text .bool {
	  color: #98f; }

	.${clPref}.monokai-clarified-theme .${clPref}__line-text ._null {
	  color: #e48; }

	.${clPref}.monokai-clarified-theme .${clPref}__line-text .error {
	  color: #fff;
	  background-color: #e48;
	  box-shadow: inset 0 0 2px #fff; }

	 `;

	const styleClassName = `${clPref}__theme-style`;

	const styleAlreadyExists = [].some.call(
		document.querySelectorAll(`style.${styleClassName}`), 
		(v) => v.textContent === cssCode
	);

	if (! styleAlreadyExists) {
		const style = eHTML(`<style class="${styleClassName}"></style>`);
		style.textContent = cssCode;
		document.head.appendChild(style);
	}
}


function eHTML(code, shell=null) {
	const _shell = 
		! shell                  ? document.createElement("div") :
		typeof shell == "string" ? document.createElement(shell) :
		typeof shell == "object" ? shell :
			null;
	_shell.innerHTML = code;
	return _shell.children[0];
}