

function createAutoComplete(arr){
	let names = arr;

	function autoComplete(inp){
		let newName = [];

		if(inp){
			for (let i = 0; i < names.length; i++) {
				let a = inp.toUpperCase();
				let b = names[i];
				let c = b.toUpperCase();
				if (c === a || 0 == c.indexOf(a)){
					newName.push(b);
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
