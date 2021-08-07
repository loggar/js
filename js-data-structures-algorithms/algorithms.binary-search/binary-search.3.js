/*
const linearSearch = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) return i;
  }
  return null;
};

const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result1 = linearSearch(list1, 8);
console.log(result1); // 7
result1 = linearSearch(list1, 19);
console.log(result1); // null
*/

const binarySearch = (list, target) => {
  let low = 0;
  let high = list.length - 1;
  let guess, mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];
    if (guess === target) return mid;
    if (guess < target) low = mid + 1;
    else high = mid - 1;
  }
  return null;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = binarySearch(list, 8);
console.log(result); // 7

result = binarySearch(list, 19);
console.log(result); // null
