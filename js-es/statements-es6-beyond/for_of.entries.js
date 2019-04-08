function fn_1() {
  var towns = ['Causeway Bay', 'Central', 'Diamond Hill'];

  // Loop over each item of the array,
  // supporting `return`, `break` and `continue`:
  for (let town of towns) {
    if (town === 'Central') return;
  }
}

function fn_2() {
  var towns = ['Causeway Bay', 'Central', 'Diamond Hill'];

  // Get the index variable, just like in `for` loops:
  for (let [i, town] of towns.entries()) {
    towns[i] = `The great city of ${town}!`;
  }
}

(function() {
  //iterate over the value
  for (const v of ['a', 'b', 'c']) {
    console.log(v);
  }
  //get the index as well, using `entries()`
  for (const [i, v] of ['a', 'b', 'c'].entries()) {
    console.log(i); //index
    console.log(v); //value
  }
})();
