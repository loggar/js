var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype = {
    toString: function () { return this.firstName + ' ' + this.lastName; }
}

function newObject(func) {
    // get an Array of all the arguments except the first one
    var args = Array.prototype.slice.call(arguments, 1);

    // create a new object with its prototype assigned to func.prototype
    var object = Object.create(func.prototype);

    // invoke the constructor, passing the new object as 'this'
    // and the rest of the arguments as the arguments
    func.apply(object, args);

    // return the new object
    return object;
}

var brendan = newObject(Person, "Brendan", "Eich");
console.log(brendan.toString()); // "Brendan Eich"

// The new operator in JavaScript essentially does this work, providing a syntax familiar to those comfortable with traditional object oriented languages:
var mark = new Person("Mark", "Miller");
console.log(mark.toString()); // "Mark Miller"

/*
 In essence, a JavaScript "class" is just a Function object that serves as a constructor plus an attached prototype object.
 I mentioned before that earlier versions of JavaScript did not have Object.create.
 Since it is so useful, people often created something like it using the new operator:
 */
var createObject = function (o) {
    // we only want the prototype part of the `new`
    // behavior, so make an empty constructor
    function F() { }

    // set the function's `prototype` property to the
    // object that we want the new object's prototype
    // to be.
    F.prototype = o;

    // use the `new` operator. We will get a new
    // object whose prototype is o, and we will
    // invoke the empty function, which does nothing.
    return new F();
};
