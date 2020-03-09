var clt = function(a, b) {
  console.assert(a < b, { message: "!(a < b)", a: a, b: b });
};

clt(2, 1);

const sum = (n1, n2) => {
  console.assert(n1 + n2 === 10, "Not 10");
};

sum(3, 2); // Assertion failed: Not 10
sum(5, 5);
sum(10, 0);
