function Person(name) {
	this.name = name
}
var person = new Person("Alex")
console.log(person.name) // Alex

/*
There are no constructors
First off, we don’t necessarily need a class in order to create an object. In JavaScript we can use a function for that purpose.
Constructor functions are just regular functions that happened to be called with the new keyword in front of them.
You could argue that there are no constructor functions — only constructor calls, because practically any function can be called to create an object.
It doesn’t have to be part of an object or class or defined in any special way.

There are a few steps that the constructor call goes through, but we’ll focus only on those that matter for the current discussion:

1. A new object is created
2. this is bound to the new object
3. Unless the function returns its own object, the call will return the constructed object
*/