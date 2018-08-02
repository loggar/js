var i=1;

var s = "abc";

console.log(i++ + " " + s);
console.log(i++ + " " + typeof s);
console.log(i++ + " " + s.__proto__);
console.log(i++ + " " + s.__proto__.__proto__);
console.log(i++ + " " + s.__proto__.__proto__.__proto__);

var a = new Array(3);
for(var x=0; x<a.length; x++) {
	a[x] = x;
}

console.log(i++ + " " + typeof a);
console.log(i++ + " " + a);


