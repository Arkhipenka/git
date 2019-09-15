

//import * as createAutocomplete from '../module_5/index.js';

window.addEventListener("load", function(event) {
	let form = document.createElement('form');
	form.id = "form";
	let input = document.createElement('input');
	input.id = "autocomplete";
	input.placeholder = "search...";
	input.type = "search";
	input.name = "text";
	input.autocomplete ="on";
	form.append(input);
	document.body.append(form);
})