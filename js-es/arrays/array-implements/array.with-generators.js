// Array.prototype.values
// const valuesGenerator = values([1, 2, 3, 4, 5]);
// valuesGenerator.next(); // { value: 1, done: false }
function values(array) {
  const { length } = array;

  function* createGenerator() {
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
      yield value;
    }
  }

  return createGenerator();
}

// Array.prototype.keys
// const keysGenerator = keys([1, 2, 3, 4, 5]);
// keysGenerator.next(); // { value: 0, done: false }
function keys(array) {
  function* createGenerator() {
    const { length } = array;

    for (let index = 0; index < length; index += 1) {
      yield index;
    }
  }

  return createGenerator();
}

// Array.prototype.keys
// const entriesGenerator = entries([1, 2, 3, 4, 5]);
// entriesGenerator.next(); // { value: [0, 1], done: false }
function entries(array) {
  const { length } = array;

  function* createGenerator() {
    for (let index = 0; index < length; index += 1) {
      const value = array[index];
      yield [index, value];
    }
  }

  return createGenerator();
}
