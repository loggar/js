let string = 'Hello';
let matches = string.match('l');
console.log(matches); // [ 'l', index: 2, input: 'Hello', groups: undefined ]
console.log(matches[0]); // "l"

let string2 = 'Hello';
let matches2 = string2.match(/l/);
console.log(matches2); // [ 'l', index: 2, input: 'Hello', groups: undefined ]
console.log(matches2[0]); // "l"
