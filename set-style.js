export default function setStyle(clPref) {

	const style = eHTML(`<style class="${clPref}__theme-style"></style>`);

	style.textContent = `
	pre.${clPref}.calm-theme {
	  background-color: #222; }
	  pre.${clPref}.calm-theme .${clPref}__line-text {
	    color: #eee; }
	    pre.${clPref}.calm-theme .${clPref}__line-text .string_v {
	      color: #ddc; }
	    pre.${clPref}.calm-theme .${clPref}__line-text .string_n {
	      color: #78a; }
	    pre.${clPref}.calm-theme .${clPref}__line-text .slashed {
	      color: #f90; }
	    pre.${clPref}.calm-theme .${clPref}__line-text .number {
	      color: #f90; }
	    pre.${clPref}.calm-theme .${clPref}__line-text .bool {
	      color: #f90; }
	    pre.${clPref}.calm-theme .${clPref}__line-text ._null {
	      color: #98f; }
	    pre.${clPref}.calm-theme .${clPref}__line-text .error {
	      color: #fff;
	      background-color: #e48;
	      box-shadow: inset 0 0 2px #fff; }

	pre.${clPref}.calm-clarified-theme .${clPref}__line .${clPref}__line-number {
	  background-color: #444; }

	pre.${clPref}.calm-clarified-theme .${clPref}__line-text {
	  color: #eee; }
	  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .string_v {
	    color: #ddc; }
	  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .string_n {
	    color: #78a; }
	  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .bool {
	    color: #fb6; }
	  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .number {
	    color: #fb6; }
	  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .slashed {
	    color: #fb6; }
	  pre.${clPref}.calm-clarified-theme .${clPref}__line-text ._null {
	    color: #98f; }
	  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .error {
	    color: #fff;
	    background-color: #e48;
	    box-shadow: inset 0 0 2px #fff; }

	pre.${clPref}.monokai-theme {
	  background-color: #333; }
	  pre.${clPref}.monokai-theme .${clPref}__line-text .string_n {
	    color: #3bd; }
	  pre.${clPref}.monokai-theme .${clPref}__line-text .string_v {
	    color: #da5; }
	  pre.${clPref}.monokai-theme .${clPref}__line-text .slashed {
	    color: #98f; }
	  pre.${clPref}.monokai-theme .${clPref}__line-text .number {
	    color: #98f; }
	  pre.${clPref}.monokai-theme .${clPref}__line-text .bool {
	    color: #98f; }
	  pre.${clPref}.monokai-theme .${clPref}__line-text ._null {
	    color: #e48; }
	  pre.${clPref}.monokai-theme .${clPref}__line-text .error {
	    color: #fff;
	    background-color: #e48;
	    box-shadow: inset 0 0 2px #fff; }

	pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .string_n {
	  color: #3bd; }

	pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .string_v {
	  color: #da5; }

	pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .slashed {
	  color: #98f; }

	pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .number {
	  color: #98f; }

	pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .bool {
	  color: #98f; }

	pre.${clPref}.monokai-clarified-theme .${clPref}__line-text ._null {
	  color: #e48; }

	pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .error {
	  color: #fff;
	  background-color: #e48;
	  box-shadow: inset 0 0 2px #fff; }

	 `;

	document.head.appendChild(style);
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