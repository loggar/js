async function example() {
  // Regular iterator:
  for (const item of thing) {
    // …
  }

  // Async iterator:
  for await (const item of asyncThing) {
    // …
  }
}

// The for-of loop will get its iterator by calling thing[Symbol.iterator]. Whereas the for-await loop will get its iterator by calling asyncThing[Symbol.asyncIterator] if it's defined, otherwise it will fall back to asyncThing[Symbol.iterator].

// For-await will give you each value once asyncIterator.next() resolves. Because this involves awaiting promises, other things can happen on the main thread during iteration. asyncIterator.next() isn't called for the next item until your current iteration is complete. This means you'll always get the items in order, and iterations of your loop won't overlap.

// It's pretty cool that for-await falls back to Symbol.iterator. It means you can use it with regular iterables like arrays:

async function example_iterator() {
  const arrayOfFetchPromises = [fetch("1.txt"), fetch("2.txt"), fetch("3.txt")];

  // Regular iterator:
  for (const item of arrayOfFetchPromises) {
    console.log(item); // Logs a promise
  }

  // Async iterator:
  for await (const item of arrayOfFetchPromises) {
    console.log(item); // Logs a response
  }
}
