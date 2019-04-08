function removeDuplications_1() {
  const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

  let unique = [...new Set(names)];
  console.log(unique);
}

function removeDuplications_2() {
  const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

  let x = names => names.filter((v, i) => names.indexOf(v) === i);
  x(names);
}

function removeDups(arr) {
  let unique = {};
  arr.forEach(function(i) {
    if (!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

function removeDuplications_3() {
  const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

  console.log(removeDups(names));
}

function removeDuplications(arr) {
  return [...new Set(arr)];
}
