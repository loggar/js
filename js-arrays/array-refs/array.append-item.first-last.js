function append(array, toAppend) {
  const arrayCopy = array.slice();
  if ("first" in toAppend) {
    arrayCopy.unshift(toAppend.first);
  }
  if ("last" in toAppend) {
    arrayCopy.push(toAppend.last);
  }
  return arrayCopy;
}

(function () {
  console.log(append([2, 3, 4], { first: 1, last: 5 })); // => [1, 2, 3, 4, 5]
  console.log(append([10], { first: 0, last: false })); // => [0, 10, false]

  console.log(append([2, 3, 4], { first: 1, last: 5 })); // => [1, 2, 3, 4, 5]
  console.log(append(["Hello"], { last: "World" })); // => ['Hello', 'World']
  console.log(append([8, 16], { first: 4 })); // => [4, 8, 16]

  console.log(append([10], { first: 0, last: false })); // => [0, 10, false]
})();
