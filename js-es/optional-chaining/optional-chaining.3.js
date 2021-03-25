const functionWithChaining = (object) => object?.name?.firstName;

functionWithChaining({
  name: { firstName: "Sylwia", lasName: "Vargas" },
  id: 1,
}); // "Sylwia"
functionWithChaining({ name: { lasName: "Vargas" }, id: 2 }); // undefined
functionWithChaining({ id: 3 }); // undefined
functionWithChaining(); // undefined
