console.log(typeof null); // => 'object'

// If you’d like to check whether a variable contains an object using typeof operator, you have to check againts null too
function isObject(object) {
  return typeof object === "object" && object !== null;
}

isObject({ prop: "Value" }); // => true
isObject(15); // => false
isObject(null); // => false
