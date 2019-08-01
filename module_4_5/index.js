var array = ["a", "ab", "v", "c", "a", "dad"];

function createAutoComplete(arr){
	var names = arr;
	function autoComplete(inp){

		var newName = [];

		for (var i = 0; i < names.length; i++) {
			
			if (names[i] === inp || 0 == names[i].indexOf(inp)){
				newName.push(names[i]);
			}
		}
		return newName;
	}
return autoComplete;
}

var autoComplete = createAutoComplete(array);
autoComplete("a");