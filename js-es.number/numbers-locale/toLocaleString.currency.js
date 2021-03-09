var n = 100;

var c1 = n.toLocaleString("en-UK", {
  style: "currency",
  currency: "USD",
});

var c2 = n.toLocaleString("en-UK", {
  style: "currency",
  currency: "AUD",
});

var c3 = n.toLocaleString("en-AU", {
  style: "currency",
  currency: "USD",
});

var c4 = n.toLocaleString("en-AU", {
  style: "currency",
  currency: "AUD",
});

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
