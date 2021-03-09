let emp = {
  id: "E_01",
  name: "Jack",
  age: 32,
  addr: "India",
};

let job = {
  title: "Software Dev",
  location: "Paris",
};

console.log("Object assign", Object.assign({}, emp, job));
