const b = [1, 2, 3];
const f = (a, ...b) => a + b;

console.log(f(1));

/*
The answer is 1.
The trick is that due to duplicate declaration of b as variable and parameter, it gets resolved as parameter.
Since we call our function only with 1 parameter – 1 + [] equals '1'.
Pay attention that type of returned value is string.
*/

console.log(f(1, b));

/*
11,2,3
*/
