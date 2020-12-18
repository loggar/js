console.log(null == undefined); // logs true
console.log(null === undefined); // logs false

function isEmpty(value) {
  return value == null;
}

isEmpty(42); // => false
isEmpty({ prop: "Value" }); // => false
isEmpty(null); // => true
isEmpty(undefined); // => true
