let set = new Set();
set.add('APPLE');
set.add('ORANGE');
set.add('MANGO');

/*
let set = new Set()
	.add('APPLE')
	.add('ORANGE')
	.add('MANGO');
*/

/*
let set = new Set(['APPLE', 'ORANGE', 'MANGO']);
*/

set.clear();
console.log(set.size);

set.add('APPLE');
set.add('APPLE');
console.log(set.size);

set.add('ORANGE');
set.add('MANGO');
set.add('MANGO');
set.add('MANGO');
console.log(set.size);

for (let entry of set) {
	console.log(entry);
}