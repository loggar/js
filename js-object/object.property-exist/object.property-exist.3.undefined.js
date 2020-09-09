const o = {
  prop: "bwahahah",
  prop2: "hweasa",
};

console.log(o["prop"]); // bwahahah
console.log(o["prop1"]); // undefined

console.log(o["prop"] !== undefined); // true
console.log(o["prop1"] !== undefined); // false
