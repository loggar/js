const array = [{ a: "a" }, { a: "b" }, { a: "c" }, { a: "d" }];

const arrayDeepCopied = [];

for (o of array) {
  arrayDeepCopied.push(Object.assign({}, o));
}

console.log(array, arrayDeepCopied);
console.log(array === arrayDeepCopied);
console.log(array[0] == arrayDeepCopied[0]);
console.log(array[0] === arrayDeepCopied[0]);
