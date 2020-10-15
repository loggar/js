/*
const getNumbersArrow = *() => {
  yield 1;
  yield 2;
};
*/
// SyntaxError: Unexpected token '*'

function* getNumbersRegular() {
  yield 1;
  yield 2;
}

// Works!
const gen = getNumbersRegular();
gen.next(); // => { value: 1, done: false }
gen.next(); // => { value: 2, done: false }
gen.next(); // => { value: undefined, done: true }
