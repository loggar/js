var re = /ar/;

var e1 = re.exec("car"); // returns ["ar", index: 1, input: "car"]
var e2 = re.exec("cab"); // returns null

console.log(e1);
console.log(e2);