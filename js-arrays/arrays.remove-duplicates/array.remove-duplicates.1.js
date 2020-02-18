// filter
function removeDuplicates_filter(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
}

function removeDuplicates_filter2(array) {
  let x = array => array.filter((v, i) => array.indexOf(v) === i);
  return x(array);
}

// iterating
function removeDuplicates_iterating(array) {
  let unique = {};
  array.forEach(function(i) {
    if (!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

// Set
function removeDuplicates_set(array) {
  return [...new Set(array)];
}

// map
function removeDuplicates_map(array) {
  let a = [];
  array.map(x => {
    if (!a.includes(x)) {
      a.push(x);
    }
  });
  return a;
}

// reduce
function removeDuplicates_reduce(arr) {
  return arr.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), []);
}

var a = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
console.log(removeDuplicates_filter(a));
console.log(removeDuplicates_filter2(a));
console.log(removeDuplicates_iterating(a));
console.log(removeDuplicates_set(a));
console.log(removeDuplicates_map(a));
console.log(removeDuplicates_reduce(a));
