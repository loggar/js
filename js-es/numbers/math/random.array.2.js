const arr = Array.from(
  {
    length: 10
  },
  (v, i) => {
    let min = 1;
    let max = 10;
    min = Math.ceil(min);
    max = Math.floor(max);
    return (num = Math.floor(Math.random() * (max - min)) + min);
  }
);
console.log(arr);
