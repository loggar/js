/*
// *Very* reduced example
let myKey = 'key3';
let obj = {
    key1: 'One',
    key2: 'Two'
};
obj[myKey] = 'Three';
*/

/*
At best this pattern is inconvenient and at worst it's confusing and ugly.  ES6 provides developers a way out of this mess:
*/

let myKey = 'variableKey';
let obj = {
	key1: 'One',
	key2: 'Two',
	[myKey]: 'Three' /* yay! */
};


/*
Wrapping the variable key in [] allows developers to get everything done within one statement!
*/
