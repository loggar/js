const arr = Array.from(
  {
    length: 10
  },
  (v, i) => {
    const min = 1;
    const max = 10;
    return Math.random() * (max - min) + min;
  }
);
console.log(arr);
