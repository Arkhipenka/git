

import { createAutoComplete } from '../module_5/index.js';



let arr = ['a', 'arr', 'autocomplete', 'branch'];

window.addEventListener("load", function(event) {
	
	function note(prompts){	
		while (ul.firstChild) {
    		ul.removeChild(ul.firstChild);
		}
		for (var i = 0; i < prompts.length; i++) {
			let li = document.createElement("li");
			li.innerHTML = prompts[i];
			ul.appendChild(li);
			
		}
	}

	let form = document.createElement('form');
	let ul = document.createElement('ul');
	form.id = "form";
	form.autocomplete = "off";
	form.class = "autocomplete";
	let input = document.createElement('input');
	input.id = "autocomplete";
	input.class = "autocomplete";
	input.placeholder = "search...";
	input.type = "text";
	input.name = "text";
	form.append(input);
	form.append(ul);
	document.body.append(form);
	
	
	
	
	let autocomplete = createAutoComplete(arr);


	
	input.addEventListener('keyup', function(event){
		
		note(autocomplete(input.value));
	},false);

	input.addEventListener('focus', function(event){

	},false);

	input.addEventListener('blur', function(event){
		while (ul.firstChild) {
    		ul.removeChild(ul.firstChild);
		}
	},false);
});


