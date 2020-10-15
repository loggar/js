const logOperation = require("./array-imple-helper").logOperation;

const { reduce } = require("./array.iterate");

// Array.prototype.join
// ['Brian', 'Matt', 'Kate'].join(', ') // -> Brian, Matt, Kate
function join(array, joinWith) {
  return reduce(
    array,
    (result, current, index) => {
      if (index === 0) {
        return current;
      }

      return `${result}${joinWith}${current}`;
    },
    ""
  );
}

logOperation("join", [1, 2, 3, 4, 5], array => join(array, ", "));