let lodash = require( './lodash.js');
console.log(lodash.chunk([1, null, 0, 'd'], 2));

console.log(lodash.compact([0, 1, false, 2, '', 3]));
console.log(lodash.compact([0, 1, false, 2, '', undefined, null]));

console.log(lodash.drop([1, 2, 3], 0));
console.log(myLodash.drop([1, 2, 3], 5));
console.log(myLodash.drop([1, 2, 3, null], 1));

let users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];
console.log(lodash.dropWhile(users, function(o) { return !o.active; }));

console.log(lodash.take([1, 2, 3], 5));
console.log(lodash.take([1, 2, 3], null));
console.log(lodash.take([1, 2, 3], 2));

console.log(lodash.filter([1,2,3,6,11,180,0,null,undefined], item => item%2 === 0));
console.log(lodash.find([1,6,7,90,56,null,undefined], item => item%2 === 0, 2));

console.log(lodash.includes([1,6,7,90,56,null,undefined], null, -1));
console.log(lodash.includes([1, 2, 3], 1, 2));

console.log(lodash.zip(['a', 'b'], [1, 2], [true, false]));
console.log(lodash.zip(['a', 'b'], [1, 2], [true, false],[null, undefined]));
console.log(lodash.zip(['a', 'b','v'], [1, 2], [true, false]));

function square(n) {
    return n * n;
}
console.log(lodash.map([2, 6], square));
console.log(lodash.map([[2,3,4,5], item => item *2));

let object = { 'a': 1, 'b': '2', 'c': 3 };
console.log(lodash.omit(object, ['a', 'c'], ));

let obj = {'a': 1, 'b': '2', 'c': 3,'d':null, 'e': undefined };
console.log(lodash.omitBy(obj, item => item%2 === 0));

console.log(lodash.pick(object, ['a', 'c']));

function even(item){
    return item%2=== 0;
}
console.log(lodash.pickBy(obj, even));