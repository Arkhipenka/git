function chunck(arr, n){
  	n = n || 1;
    let arrResult = [];
    let k = 0;
    if(n > arr.length){
        arrResult = arr;
    }else if(n === arr.length){
        arrResult.push(arr);
    }else{
        let arrResultLength = Math.floor(arr.length % n) === 0 ? Math.floor(arr.length/n) : Math.floor(arr.length/n) + 1;
        for (let i = 0; i < arrResultLength; i++){
            arrResult.push([]);
            for(let j = k; j <arr.length; j++){
                if(arrResult[i].length < n){
                    arrResult[i].push(arr[j]);
                }
            } 
            k += n;
        }
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
	for (let i = -1; ++i < arr.length && predicate(arr[i]); i++) {	
	}
	return drop(arr, i);
}

function take(arr, n){
	let size = n || 1;
	let arrResult = [];
	for (let i = 0; i < size; i++) {
		arrResult.push(arr[i]);
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
		for (let i = n; i < arr.length; i++) {
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

function zip(...arrays){
	let arrResult = [];
	let arrResultLength = arrays[0].length;
	let currentArr = [];
	for (var i = 0; i < arrResultLength; i++) {
	    let k = 0;
		for (let array of arrays) {
			currentArr[k++] = array[i];
		}
		arrResult[i] = currentArr;
		currentArr = [];
	}
	return arrResult;
}



function merge(obj, other){
	const object = {};
	let array = [];
	for(let key in obj){
		array.push(obj[key])
		for(key in other){
			object
		}
	}
	return array;
}

function omit(obj, paths){
	const object = {};
	for(let key in obj){
		let isDeep = false;
		if(key === item){
			isDeep = true;
			break
		}else if(!isDeep){
			object[key] = obj[key];
		}
	}
	return object;
}

function omitBy(obj, predicate){
	const object = {};
	for(let key in obj){
		let objResult = predicate(obj[key], key);
		if(!objResult){
			object[key] = obj[key];
		}
	}
	return object;
}

function pick(obj, paths){
	const object = {};
   	for(let item of paths){
       	object[i] = obj[i];
    }
   	return object;	
}

function pickBy(obj, predicate){
	const object = {};
	if (obj == null) {
		return {}
	}
	for (let key in obj){
		let objectResult = predicate(obj[key],key);
		if(objectResult){
			object[key] = obj[key];
		}
		
	}
	return object;
}

function 