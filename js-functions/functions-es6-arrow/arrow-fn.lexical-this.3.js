function sum() {
  this.total = 0;

  arr.forEach(item => {
    this.total += item; // all is well `this` points to outer function
  });
  return total;
}
