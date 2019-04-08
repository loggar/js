var date = "26/03/2018";

var d = date.substr(0,2);
var m = date.substr(3,2);
var y = date.substr(6,4);

console.log(y);
console.log(m);
console.log(d);

var date2 = new Date(date);
var date3 = new Date(y + '-' + m + ' ' + d);

console.log(date2);
console.log(date3);

var strDate = y + '-' + m + '-' + d + ' 00:00:00.000'
console.log(strDate);

