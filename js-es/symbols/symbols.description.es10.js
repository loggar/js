let mySymbol = 'My Symbol';
let symObj = Symbol(mySymbol);

console.log(symObj);

console.log(String(symObj));
console.log(`Symbol(${mySymbol})`);

console.log(String(symObj) === `Symbol(${mySymbol})`);

let desc = symObj.description; // "My Symbol"

console.log(desc);
