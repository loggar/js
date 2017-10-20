var total = 20;
var results = [0, 1];

console.time("Getting Fibonaccie Numbers");

for(var i=0; i<total; i++) {
	if(i>=2) {
		results.push(results[i-2] + results[i-1]);
	}
}

console.timeEnd("Getting Fibonaccie Numbers");

console.log(results);
console.log("Finonacci [" + total + "th Number is [" + results[results.length-1] +"]");
