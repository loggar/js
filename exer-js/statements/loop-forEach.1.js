var data = [1, 2, 3, 4, 5]; // This is the array we want to iterate
var sumOfSquares = 0; // We want to compute the sum of the squares of data
data.forEach(function (x) { // Pass each element of data to this function
	sumOfSquares += x * x; // add up the squares
});
console.log(sumOfSquares); // =>55 : 1+4+9+16+25