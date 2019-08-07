function createAutoComplete(arr){
	let names = arr;

	function autoComplete(inp){
		let newName = [];

		if(inp){
			for (let i = 0; i < names.length; i++) {
				if (names[i].toLowerCase() === inp.toLowerCase() || 0 == names[i].toLowerCase().indexOf(inp.toLowerCase())){
					newName.push(names[i]);
				}
			}
		}else{
		newName = [];
		}
		return newName;

	}
  return autoComplete;
}

module.exports.createAutoComplete = createAutoComplete;
