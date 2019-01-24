// Async iterators work pretty much the same as regular iterators, but they involve promises:

async function example() {
  // Regular iterator:
  const iterator = createNumberIterator();
  iterator.next(); // Object {value: 1, done: false}
  iterator.next(); // Object {value: 2, done: false}
  iterator.next(); // Object {value: 3, done: false}
  iterator.next(); // Object {value: undefined, done: true}

  // Async iterator:
  const asyncIterator = createAsyncNumberIterator();
  const p = asyncIterator.next(); // Promise
  await p; // Object {value: 1, done: false}
  await asyncIterator.next(); // Object {value: 2, done: false}
  await asyncIterator.next(); // Object {value: 3, done: false}
  await asyncIterator.next(); // Object {value: undefined, done: true}
}
