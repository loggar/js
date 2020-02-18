function myFavoriteFunc(a) {
  if (true) {
    var b = "Hello " + a;
  }
  return b;
}
myFavoriteFunc("World");

console.log(a); // Throws a ReferenceError "a" is not defined
console.log(b); // does not continue here
