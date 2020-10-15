const isRequired = () => {
  throw new Error("param is required");
};

const print = (num = isRequired()) => {
  console.log(`printing ${num}`);
};

print(2); //printing 2
print(null); //printing null
print(); // error
