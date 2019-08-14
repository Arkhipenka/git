function createAutoComplete(arr){

	function autoComplete(inp){
		if(!inp){
		 return [];
		}
		return arr.filter(item => item.toLowerCase().indexOf(inp.toLowerCase(inp)) === 0);
		
		
	}
  return autoComplete;
}

module.exports.createAutoComplete = createAutoComplete;
