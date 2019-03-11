for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}

// 5,5,5,5,5

for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}

// 0,1,2,3,4

/*
setTimeout function will be called after whole cycle is executed because of JavaScript event queue.
Variables declared using var are global by default – meaning i would be equal to 5 after the end of a cycle.
Since all setTimeout functions are called after the cycle, the all would print 5.

Output of second loop even more bizarre.
In ECMA 6 specification, the specified behaviour is that in for(let i;;){} i gets a new binding for every iteration of the loop.
Essentially each closure inside a loop gets a different instance of i
*/
