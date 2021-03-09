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

let merged = { ...emp, ...job };
console.log("Spread merged", merged);
