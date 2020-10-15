console.log(+"23"); // 23
console.log(+{}); // NaN
console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+{ valueOf: () => 67 }); // 67
console.log(+"nnamdi45"); // NaN
