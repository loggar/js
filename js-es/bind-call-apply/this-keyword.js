/*
Default binding
*/
function testThisKeyword() {
	console.log(this) // browser : [object Window]
	console.log(this.name) // browser : Alex
}
var name = 'Alex'
testThisKeyword();

/*
Implicit Binding
*/
const person = {
	name: 'Alex',
	greet() {
		console.log('Hey my name is ' + this.name)
	}
}
person.greet() // Hey my name is Alex


/*
Explicit Binding - call
*/
function greet() {
	console.log(this.name);
}

var person2 = {
	name: 'Alex'
};

greet.call(person2, 1, 2, 3); // Alex

/*
Explicit Binding - apply
*/
var person3 = {
	name: 'Alex'
};

var args = [1, 2, 3];

greet.apply(person3, [args]); // Alex

/*
Explicit Binding, and not execute yet
*/
var greetPerson = greet.bind(person);
greetPerson(); // Alex
