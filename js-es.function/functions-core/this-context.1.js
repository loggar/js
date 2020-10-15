console.log(this);


function bar() {
	console.log(this);
}
bar(); // global!


function foo() {
	console.log(this.a);
}
var food = { a: "Magical this" };
foo.call(food); // food is this
