/*
Bonding arrays contained in an array of objects using the spread operator and initialValue
*/
// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
	name: 'Anna',
	books: ['Bible', 'Harry Potter'],
	age: 21
}, {
	name: 'Bob',
	books: ['War and peace', 'Romeo and Juliet'],
	age: 26
}, {
	name: 'Alice',
	books: ['The Lord of the Rings', 'The Shining'],
	age: 18
}];

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function (accumulator, currentValue) {
	return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]