// array-like object
var arrLike = {
	length: 3,
	0: "foo",
	1: "bar"
};

var arr = Array.prototype.slice.call(arrLike);
var arr2 = arr.slice();
var arr3 = Array.from(arrLike);
var arrCopy = Array.from(arr);

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arrCopy);