var data = [1, 2, 3, 4, 5]; // An array to sum
// Compute the sum of the array elements
var sum = 0; // Start at 0
data.forEach(function (value) { sum += value; }); // Add each value to sum
sum // => 15
// Now increment each array element
data.forEach(function (v, i, a) { a[i] = v + 1; });
data // => [2,3,4,5,6]



function foreach(a, f, t) {
	try { a.forEach(f, t); }
	catch (e) {
		if (e === foreach.break) return;
		else throw e;
	}
}
foreach.break = new Error("StopIteration");