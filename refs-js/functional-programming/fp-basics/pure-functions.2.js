/*
Let’s conclude our discussion by converting the following non pure function to pure.
This is a contrived example, but demonstrates how we can easily refactor unpure code to pure.
*/

let a = 4;
let b = 5;
let c = 6;
const updateTwoVars = (a) => {
	b++;
	c = a * b;
}

updateTwoVars(a);
console.log(b, c);


/*
First ensure that all the variables that the function depends on are passed as arguments
Instead of mutating (manipulating) b and c, we can return new values which will reflect the new values.
*/

let a1 = 4;
let b1 = 5;
let c1 = 6;
const updateTwoVars1 = (a, b, c) => [b++, a * b];

const updateRes = updateTwoVars1(a1, b1, c1);
b1 = updateRes[0];
c1 = updateRes[1];

console.log(b, c);
