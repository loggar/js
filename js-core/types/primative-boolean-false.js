/*
false
undefined
null
0
-0
NaN
'', "" // the empty string
*/

if(!false) {
	console.log('!false');
}

if(!undefined) {
	console.log('!false');
}

if(!null) {
	console.log('!false');
}

if(!0) {
	console.log('!false');
}

if(!(-0)) {
	console.log('!false');
}

if(!NaN) {
	console.log('!false');
}

if(!'') {
	console.log('!false');
}
