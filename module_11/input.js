

/*import * as createAutocomplete from '../module_5/index.js';
let arr = ['array', 'kare','arn','a','alk','karen'];*/

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

function createAutoComplete(arr){

	function autoComplete(inp){
		if(!inp){
		 return [];
		}
		return arr.filter(item => item.toLowerCase().indexOf(inp.toLowerCase(inp)) === 0);
				
	};
  return autoComplete;
};

/*let autocomplete = createAutoComplete(arr);

let a = document.getElementsByTagName('input');
let b = document.createElement('p');
a.oninput = function(){
	
	
	
};b.innerHTML = autocomplete(a.value);
document.body.append(b);

// module.exports.createAutoComplete = createAutoComplete;*/