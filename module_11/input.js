

import { createAutoComplete } from '../module_5/index.js';

let arr = ['a', 'arr', 'autocomplete', 'branch']
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
	//let autocomplete = createAutoComplete(arr);
	
});

let autocomplete = createAutoComplete(arr);
//


let a = document.getElementsByTagName('input');

a.oninput = function(){
	autocomplete(a.value);
};


console.log('createAutoComplete: ', autocomplete(a.value));