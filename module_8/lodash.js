function compact(arr) {
	let array = [];
	for (let i = 0; i < arr.length; i++){
		if(arr[i]){
			array.push(arr[i]);
		}
	}
	return array;
}

function drop(arr){
	arr.shift();
	return arr;
}

function dropWhile(arr, n){
	let array = [];
	for (var i = n; i < arr.length; i++) {
		array.push(arr[i]);
	}
	return array;
}

