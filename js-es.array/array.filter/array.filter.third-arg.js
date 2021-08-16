const numbers = [1, 2, 3, 4, 5];
const r = numbers.filter((item, index, array) => {
  console.log(index, item, array);
  return item > 2;
});

console.log("r", r);
