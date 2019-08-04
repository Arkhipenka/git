let array = ["a", "ab", "v", "c", "a", "dad"];

function createAutoComplete(arr){
	let names = arr;
	function autoComplete(inp){

		let newName = [];

		for (let i = 0; i < names.length; i++) {
			
			if (names[i] === inp || 0 == names[i].indexOf(inp)){
				newName.push(names[i]);
			}
		}
		return newName;
	}
  return autoComplete;
}

let autoComplete = createAutoComplete(array);
autoComplete("a");

module.exports.createAutoComplete = createAutoComplete;