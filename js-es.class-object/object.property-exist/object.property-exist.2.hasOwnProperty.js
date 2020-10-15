const o = {
  prop: "bwahahah",
  prop2: "hweasa",
};

//Still using the o object in the first example.
console.log(o.hasOwnProperty("prop2")); // true
console.log(o.hasOwnProperty("prop1")); // false
console.log(o.hasOwnProperty("toString")); // false
