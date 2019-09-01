//доработать
function сhunck(arr, n){
    n = n || 1;
    let arrResult = [];
    for (let i = 0; i < arr.length; i += n){
        arResult.push(arr[i]);
    }
    return arrResult;
}

function compact(arr) {
	let arrResult = [];
	for (let i = 0; i < arr.length; i++){
		if(arr[i]){
			arrResult.push(arr[i]);
		}
	}
	return arrResult;
}

function drop(arr, n){
	n = n || 1;
	let arrResult = [];
	for (let i = n; i < arr.length; i++) {
		arrResult.push(arr[i]);
	}
	
	return arrResult;
}
// доработать
function dropWhile(arr, predicate){
	let arrResult = [];
	for (let i = -1; ++i < arr.length && predicate(arr[i]); i++) {
		arResult.push(arr[i]);
	}
	return arrResult;
}

function filter(arr, predicate){
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
      let parrametrBoolean = predicate(arr[i]);
      if(parrametrBoolean){
      	arrResult.push(arr[i]);
      }
    }
    return arrResult;
}



   
function find(arr, predicate, n){
	let answer;
	n = n || 0;
	for (let i = n; i < arr.length; i++) {
		let booleanItem = predicate(arr[i]);
		if(booleanItem){
			answer = arr[i];
		}
		return answer;
	}
}

function take(arr, n){
	let size = n || 1;
	let arrResult = [];
	for (let i = 0; i < size; i++) {
		arrResult.push(arr[i]);
	}
	return arrResult;
}
//доделать
function includes(arr, value, n){
	let answer = false;
	if (!n) {
		n = 0;
	}else if(n < 0){
		n = arr.length + n - 1;
	}else if(typeOf(value) === 'string' && typeOf(arr) === 'string'){
		return arr.includes(value, n);
	}else if(n >= 0){
		for (var i = n; i < arr.length; i++) {
			if(arr[i] === value){
				answer = true;
				break;
			}
		}
	}else{
		for (let i = n; i > 0; i--){
			if(value == arr[i]){
				answer = true;
				break;
			}
		}
	}
	
	return answer;
}

function map(arr, iteratee){
	let arrResult = [];
	for (var i = 0; i < arr.length; i++) {
    let itemArr = iteratee(arr[i]);
		arrResult.push(itemArr)
	}
	return arrResult;
}
//доработать
function zip(...arr){
	let arrResult = [];
	arrResult.length = arr[0].length;
	let itemArr = [];
	for (var i = 1; i < arr.length; i++) {
		for (let array of arr) {
			
				itemArr.push(array[i]);
	
		}
		arrResult[i].push(itemArr)
		

	}
	return arrResult;
}



function merge(arg, arg1){


}

function pick(arg1, arg2, ... argn){

}

function omitBy(){

}
