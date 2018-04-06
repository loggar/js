/* year and semester */
var str = "0315";
var prefix = "20";
var tmp = str.substr(str.length-2, 2);
console.log(prefix+tmp);

/* year and semester 2 */
var year = "2017";
var seq = "02";
var year2 = year.substr(year.length-2, 2);
console.log(year2);
console.log(seq+year2);

/* reverse */
function reverse(str) {
  return str.substr(str.length-2, 2) + str.substr(0, 2);
}

var str = "0316";
console.log(!isNaN(str) && str.length === 4);
console.log(reverse(str));

/* substring */
var str = "ACC707LAT20117";

console.log(str[8]);
console.log(str[8] === "T");
if(str[8] === "T") {
	console.log(str.substr(6,4));
} else {
	console.log(str.substr(6,2));
}

