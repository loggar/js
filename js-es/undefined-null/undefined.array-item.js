const colors = ["blue", "white", "red"];
colors[5]; // => undefined
colors[-1]; // => undefined

const sparse1 = new Array(3);
sparse1; // => [<empty slot>, <empty slot>, <empty slot>]
sparse1[0]; // => undefined
sparse1[1]; // => undefined
const sparse2 = ["white", , "blue"];
sparse2; // => ['white', <empty slot>, 'blue']
sparse2[1]; // => undefined
