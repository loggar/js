function isObject(object) {
  return typeof object === "object" && object !== null;
}

isObject({ name: "Batman" }); // => true
isObject(15); // => false
isObject(null); // => false
