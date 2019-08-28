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
	for (let i = n; i < arr.length; i++) {
		array.push(arr[i]);
	}
	return array;
}

function filter(arr, value){
  
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value ){
        array.push(arr[i]);
      }
    }
    return array;
}


function chunk(arr, n){
    let arrArr = [];
	let array = [];
	
		for (let i = 0; i < arr.length; i++) {
			if(arrArr.length < n){
				arrArr.push(arr[i])
			}
	}
	array.push(arrArr);
	    
    
	return array;
}
	    
function find(arr, value){
	let array = [0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === value){
			array = arr[i];
		}
		return array;
	}
}

function take(arr, n){
	let array = [];
	for (var i = 0; i < n; i++) {
		array.push(arr[i]);
	}
	return array;
}

function includes(arr, value){
	let arrBoolean;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === value){
			arrBoolean = true;
		}

		arrBoolean = false;
	}
	return arrBoolean;
}
function zip(arr){
	let array = [];
	for (var i = 1; i < arr.length; i++) {
		let itemArr = arr[i];
		for (var j = 0; j < itemArr.length; j++) {
			if(i === j){
				array.push(itemArr[j]);
			}
		}
		return array

	}return array;
}

function map(arr, operation){
	let array = [];
	for (var i = 0; i < arr.length; i++) {
		let parameter = operation;
		return parameter;
		array.push(arr[i])

	}
	return array;
}