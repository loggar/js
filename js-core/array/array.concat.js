var a = [1, 2, 3];
a.concat(4, 5) // Returns [1,2,3,4,5]
a.concat([4, 5]); // Returns [1,2,3,4,5]
a.concat([4, 5], [6, 7]) // Returns [1,2,3,4,5,6,7]
a.concat(4, [5, [6, 7]]) // Returns [1,2,3,4,5,[6,7]]



var a = [1, 2, 3, 4, 5];
a.slice(0, 3); // Returns [1,2,3]
a.slice(3); // Returns [4,5]
a.slice(1, -1); // Returns [2,3,4]
a.slice(-3, -2); // Returns [3]



var a = [1, 2, 3, 4, 5, 6, 7, 8];
a.splice(4); // Returns [5,6,7,8]; a is [1,2,3,4]
a.splice(1, 2); // Returns [2,3]; a is [1,4]
a.splice(1, 1); // Returns [4]; a is [1]



var a = [1, 2, 3, 4, 5];
a.splice(2, 0, 'a', 'b'); // Returns []; a is [1,2,'a','b',3,4,5]
a.splice(2, 2, [1, 2], 3); // Returns ['a','b']; a is [1,2,[1,2],3,3,4,5]



var stack = []; // stack: []
stack.push(1, 2); // stack: [1,2] Returns 2
stack.pop(); // stack: [1] Returns 2
stack.push(3); // stack: [1,3] Returns 2
stack.pop(); // stack: [1] Returns 3
stack.push([4, 5]); // stack: [1,[4,5]] Returns 2
stack.pop() // stack: [1] Returns [4,5]
stack.pop(); // stack: [] Returns 1



