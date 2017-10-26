var a = new Object();
a.name = "name";
a.age = 30;
a.increaseAge = function(){return ++this.age;};

console.log(a.increaseAge());


/* test 2 */
var b = {
		name: "name",
		age: 30,
		increaseAge: function(){return ++this.age;}
};

console.log(b.increaseAge());


/* test 3 */
function Person(name, age) {
	this.name = name||"name";
	this.age = age||30;
	this.increaseAge = function(){return ++this.age;};
}

var c = new Person();
console.log(c);
console.log(c.increaseAge());

var d = new Person("otherPerson", 60);
console.log(d);
console.log(d.increaseAge());
console.log(d.increaseAge());


/* test 4 */
var e = Object.create(a);
console.log(e);
console.log(e.increaseAge());
console.log(e.increaseAge());

console.log(a.increaseAge());