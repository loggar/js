// array
function reverse_array(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

// spread
function reverse_spread(string) {
  return [...string].reverse().join("");
}

// for
function reverse_iterate(string) {
  let reversed = ""; // step 1
  for (let char of string) {
    // step 2
    reversed = char + reversed; // step 3
  }
  return reversed; // step 4
}

// Array.from
function reverse_arrayfrom(str) {
  return Array.from(str)
    .reverse()
    .join("");
}

// reduce
function reverse_reduce(str) {
  return [...str].reduce((rev, char) => char + rev, "");
}

const s = "123 456 ! 😄";
console.log(reverse_array(s));
console.log(reverse_spread(s));
console.log(reverse_iterate(s));
console.log(reverse_arrayfrom(s));
console.log(reverse_reduce(s));
