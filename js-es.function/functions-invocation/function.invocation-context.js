/* Simple Function Invocation */

function hello(thing) {
    console.log(this + " says hello " + thing);
}

hello.call("Charly", "world"); // Charly says hello world

function hello2(thing) {
    console.log("Hello " + thing);
}

// this:
hello2("world");
// desugars to:
hello2.call(undefined, "world");

/* Member Functions */

var person = {
    name: "Charly Lee",
    hello: function (thing) {
        console.log(this.name + " says hello " + thing);
    }
}

// this:
person.hello("world");

// desugars to this:
person.hello.call(person, "world");

// dynamic
function hello3(thing) {
    console.log(this.name + " says hello " + thing);
}

person2 = { name: "Charly Lee" }
person2.hello = hello3;

person2.hello("world"); // still desugars to person.hello.call(person, "world")

hello3("world"); // undefined(or object global) says hello worldsdfsd

/* Function.prototype.bind */

var person3 = {
    name: "Charly Lee",
    hello: function (thing) {
        console.log(this.name + " says hello " + thing);
    }
}

var boundHello = function (thing) { return person3.hello.call(person, thing); }

boundHello("world");

var bind = function (func, thisValue) {
    return function () {
        return func.apply(thisValue, arguments);
    }
}

var boundHello2 = bind(person3.hello, person);
boundHello2("world") // "Charly Lee says hello world"

// ES5 introduced the bind method on all Function objects :
var boundHello3 = person.hello.bind(person);
boundHello3("world") // "Charly Lee says hello world"  

// This is most useful when you need a raw function to pass as a callback:
/* jquery
var person = {  
  name: "Alex Russell",
  hello: function() { console.log(this.name + " says hello world"); }
}

$("#some-div").click(person.hello.bind(person));
*/
// when the div is clicked, "Alex Russell says hello world" is printed