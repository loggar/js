const dynamic = "flavour";
var item = {
  name: "Coke",
  [dynamic]: "Cherry"
};
console.log(item);
// { name: "Coke", flavour: "Cherry" }
