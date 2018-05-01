/*
The way we've always iterated on an Object instance was always a for loops with a hasOwnProperty check which was ugly; Object.keys (not Object.prototype.keys) provides an array of Object properties!
*/

var person = {
	firstName: 'David',
	lastName: 'Walsh',
	// ...
};

Object.keys(person).forEach(function (trait) {
	console.log('Person ', trait, ': ', person[trait]);
});


for (const trait in person) {
	console.log(trait);
}