const merge = function (left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
};

const mergeSort = function (array) {
  const half = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
};

const someArray = [
  10, 5, 19, 18, 6, 11, 13, 1, 5, 87, 23, 4, 22, 66, 9, 5, 123, 345, 6, 45, 2,
  5, 7, 0,
];
const sortedArr = mergeSort(someArray);

console.log(sortedArr);
