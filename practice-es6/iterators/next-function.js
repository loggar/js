// A function that returns an iterator;
function counter(start) {
	let nextValue = Math.round(start); // Private state of the iterator
	return { next: function () { console.log(++nextValue); return nextValue; } }; // Return iterator obj
}
let serialNumberGenerator = counter(1000);
let sn1 = serialNumberGenerator.next(); // 1000
let sn2 = serialNumberGenerator.next(); // 1001



const StopIteration = new Error("StopIteration");

// A function that returns an iterator for a range of integers
function rangeIter(first, last) {
	let nextValue = Math.ceil(first);
	return {
		next: function () {
			if (nextValue > last) throw StopIteration;
			return nextValue++;
		}
	};
}
// An awkward iteration using the range iterator.
let r = rangeIter(1, 5); // Get an iterator object
while (true) { // Now use it in a loop
	try {
		console.log(r.next()); // Try to call its next() method
	}
	catch (e) {
		if (e === StopIteration) break; // Exit the loop on StopIteration
		else throw e;
	}
}

