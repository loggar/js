function sum() {
  this.total = 0;
  var self = this;

  arr.forEach(function(item) {
    self.total += item; // now we are using `self`, it solves it but feels hacky
  });
  return total;
}
