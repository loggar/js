const map = f => x => Array.prototype.map.call(x, f) // now method map is detached from Array object by currying.

/*
Decoupling allows us to easily turn an object mapping into a list mapping:
*/

const getFullName = ({ first, last }) => `${first} ${last}`

getFullName({ first: 'Max', last: 'Power' })
// => 'Max Power'

const fullNames = map(getFullName)([
	{ first: 'Max', last: 'Power' },
	{ first: 'Disco', last: 'Stu' },
	{ first: 'Joe', last: 'Kickass' }
])
console.log(fullNames);

/*
We can even map over objects.
*/

const increase = n => n + 1
const obj = {
	0: 4,
	1: 5,
	2: 6,
	length: 3
}

const objIncreaded = map(increase)(obj)
console.log(objIncreaded)
