/*
I'm old enough to remember the days where a trailing comma would completely explode your JavaScript code in Internet Explorer 6.  JavaScript now accommodates for the extra comma:
*/


let myObj = { a: 'b', b: 'c', } // No error!

let myArr = [1, 2, 3,] // No error!

[1, 2, 3,].length // 3
[1, 2, 3, , , ].length // 5


/*
The case of the Array length is one to keep in mind.  ESLint has a comma-dangle rule you can use to ensure your comma dangle usage is consistent.
*/

const doSomething = (var1, var2,) => {
  //...
}
doSomething('test2', 'test2',)