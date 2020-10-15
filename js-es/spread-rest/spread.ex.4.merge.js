const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];

const finalArr = [...arr1, ...arr2]; // [1,2,3,4,5,6,7]

const partialObj1 = {
  name: "fernando",
};
const partialObj2 = {
  age: 37,
};

const fullObj = { ...partialObj1, ...partialObj2 }; // {name: "fernando", age: 37}
