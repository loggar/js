//decorator function
const allArgsValid = function (fn) {
  return function (...args) {
    if (args.length != fn.length) {
      throw new Error("Only submit required number of params");
    }
    const validArgs = args.filter((arg) => Number.isInteger(arg));
    if (validArgs.length < fn.length) {
      throw new TypeError("Argument cannot be a non-integer");
    }
    return fn(...args);
  };
};

module.exports = allArgsValid;
