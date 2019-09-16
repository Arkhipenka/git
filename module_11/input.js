//import {createAutoComplete} from '../module_5/index.js';

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
	
});

let val = document.getElementById('autocomplete').value;

function createAutoComplete(arr){

	function autoComplete(inp){
		if(!inp){
		 return [];
		}
		return arr.filter(item => item.toLowerCase().indexOf(inp.toLowerCase(inp)) === 0);		
	}
  return autoComplete;
}

createAutoComplete(val);