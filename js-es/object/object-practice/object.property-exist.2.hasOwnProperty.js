const o = {
  prop: "bwahahah",
  prop2: "hweasa"
};

//Still using the o object in the first example.
console.log(o.hasOwnProperty("prop2")); // This logs true
console.log(o.hasOwnProperty("prop1")); // This logs false
