const max = 10;
const min = 1;
const arr = Array.from(
  {
    length: max - min + 1
  },
  (v, i) => min + i
);
console.log(arr);
