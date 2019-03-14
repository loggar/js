// Mapping
let numbersTimes10 = numbers.map(n => n * 10);

// Filtering
let evenNumbers = numbers.filter(n => n % 2 == 0);

// Fold / Reduce
// If a default value is not supplied to reduce,
// then reducing an empty list will produce a TypeError at runtime
let total = numbers.reduce((acc, n) => acc + n, 0);

// Joining string representations of items
let joined = items.reduce((left, right) => left + '/' + right, '');

// Zip
let results = zip([[1, 2, 3], ['a', 'b', 'c'], ['x', 'y', 'z']]);
// produces [[1,'a','x'],[2,'b','y'],['3','c','z']]

// zip is not built in
const zip = rows => rows[0].map((_, column) => rows.map(row => row[column]));

// alternative version of zip (takes each array as separate parameter)
let results = zip([1, 2, 3], ['a', 'b', 'c'], ['x', 'y', 'z']);

const zip = (...rows) => [...rows[0]].map((_, c) => rows.map(row => row[c]));

// to alternate items into one list use reduce
zip([0, 2, 4], [1, 3, 5]).reduce((acc, item) => acc.concat(item)); //[0,1,2,3,4,5]
