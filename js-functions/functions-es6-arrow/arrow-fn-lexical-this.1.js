let array = [1, 2, 3];

function sum() {
  this.total = 0;

  arr.forEach(function(item) {
    this.total += item; // `this` is the inner functions `this`, BAD
  });
  return total;
}
