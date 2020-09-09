var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

myMap.forEach((value, key) => {
  console.log(key, value);
});
// 0 zero
// 1 one
