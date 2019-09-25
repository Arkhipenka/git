

import { createAutoComplete } from '../module_5/index.js';

let arr = ['a', 'arr', 'autocomplete', 'branch'];

window.addEventListener("load", function(event) {

	

	let form = document.createElement('form');
	form.id = "form";
	let input = document.createElement('input');
	input.id = "autocomplete";
	input.placeholder = "search...";
	input.type = "text";
	input.name = "text";
	input.autocomplete =false;
	form.append(input);
	document.body.append(form);
	
	let autocomplete = createAutoComplete(arr);


	
	input.addEventListener('keyup', function(event){
		autocomplete(input.value);
		console.log(autocomplete(input.value));
	},false);

	input.addEventListener('focus', function(event){
		event.preventDefault();
		console.log("focus");
	},false);


	input.addEventListener('click', function(event){
		event.preventDefault();
		console.log("click");
	},false);

	input.addEventListener('blur', function(event){
		console.log("blur");
	},false);
});


