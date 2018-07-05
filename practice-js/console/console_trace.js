// ex1
var foo = function foo() {
	console.trace();
},
	bar = function bar() {
		foo();
	};

bar();


// ex2
const function2 = () => console.trace()
const function1 = () => function2()
function1()