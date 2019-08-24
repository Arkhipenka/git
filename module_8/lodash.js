function filter(arr) {
	let array = [];
	for (let i = 0; i < arr.length; i++){
		if(arr[i]){
			array.push(arr[i]);
		}
	}
	return array;
}
