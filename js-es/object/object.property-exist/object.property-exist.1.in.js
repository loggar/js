const o = {
  prop: "bwahahah",
  prop2: "hweasa",
};

console.log("prop" in o); // This logs true indicating the property "prop" is in "o" object
console.log("prop1" in o); // This logs false indicating the property "prop" is not in  "o" object
console.log("toString" in o); // true
