const arr1 = ["a", "c", "b"];
const arr2 = ["b", "c", "a"];

console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);
