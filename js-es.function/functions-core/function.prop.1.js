function func() {}
func.prop1 = "prop1";
func.prop2 = "prop2";

const j1 = new func();
const j2 = new func();

console.log(j1.prop1); // undefined
console.log(j2.prop1); // undefined
j1.prop1 = "prop1 changed";
console.log(j1.prop1); // prop1 changed
