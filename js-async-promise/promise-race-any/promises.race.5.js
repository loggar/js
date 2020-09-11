var foreverPendingPromise = Promise.race([]);
var alreadyResolvedProm = Promise.resolve(666);

var arr = [foreverPendingPromise, alreadyResolvedProm, "non-Promise value"];
var arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(666)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(function () {
	console.log('the stack is now empty');
	console.log(p);
	console.log(p2);
});

// logs, in order:
// Promise { <state>: "pending" } 
// Promise { <state>: "pending" } 
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 666 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }