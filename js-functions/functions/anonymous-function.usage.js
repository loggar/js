// for encapsulate scope
(function() {
  // Some code here.
})();

// for callbacks
setTimeout(function() {
  console.log("Hello world!");
}, 1000);

// for handlers
const arr = [1, 2, 3];
const double = arr.map(function(el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]
