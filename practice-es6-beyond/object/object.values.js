/*
Object.keys has been immensely useful for me so I was also excited to see Object.values introduced:
*/

// Object literal
Object.values({ 'a': 23, 'b': 19 }) // [23, 19]

// Array-like object (order not preserved)
Object.values({ 80: 'eighty', 0: 1, 1: 'yes' }) // [1, 'yes', 'eighty']

// String
Object.values('abcde') // ['a', 'b', 'c', 'd', 'e']

// Array
Object.values([1, 2, 3]) // [1, 2, 3]