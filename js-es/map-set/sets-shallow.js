// Sets are shallow, meaning duplicate arrays and objects with the same values which will lead to multiple entries in the set.
let set = new Set();
set.add([1, 2, 3]);
set.add([1, 2, 3]);
console.log(set); // Set { [ 1, 2, 3 ], [ 1, 2, 3 ] }
console.log(set.size); // 2

// Strings are immutable, however, so multiple strings in a set like this:
let set2 = new Set();
set2.add([1, 2, 3].join(","));
set2.add([1, 2, 3].join(","));
console.log(set2); // Set { '1,2,3' }
console.log(set2.size); // 1
