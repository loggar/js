//impure
let counter = 0;
const logAfter3Calls = () => {
	if (++counter == 3)
		console.log('called me 3 times');
}
logAfter3Calls() // Nothing happens
logAfter3Calls() // Nothing happens
logAfter3Calls() // 'called me 3 times'



//Pure
const R = require('ramda');

const log = () => {
	console.log('called me 3 times');
}
const logAfter3Calls_c = R.curryN(3, log);
//call
logAfter3Calls_c('')('')('')//'called me 3 times'
 //Note: We are passing '' to satisfy CurryN that we are passing some parameter.