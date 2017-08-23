console.time('timer label');

var foo = [];

// Warning: Avoid large set iterations blocking 
// the event loop like this one does.
for (var i = 0, end = 1000000; i < end; i++) {
  foo[foo.length] = i;
}

console.timeEnd('timer label');