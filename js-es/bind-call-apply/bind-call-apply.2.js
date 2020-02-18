var cylinder = {
	pi: 3.14,
	volume: function (r, h) {
		return this.pi * r * r * h;
	}
};

console.log(cylinder.volume());  // null context!

var a1 = cylinder.volume.call({ pi: 3.14159 }, 2, 6);
console.log(a1);

var a2 = cylinder.volume.apply({ pi: 3.14159 }, [2, 6]);
console.log(a2);


/*
Bind attaches a brand new this to a given function. In bind’s case, the function is not executed instantly like Call or Apply.
*/

var newVolume = cylinder.volume.bind({ pi: 3 }); // This is not instant call
// After some long time, somewhere in the wild 
var a3 = newVolume(2, 6); // Now pi is 3.
console.log(a3);

/*
What is the use of Bind? It allows us to inject a context into a function which returns a new function with updated context.
It means this variable will be user supplied variable.
This is very useful while working with JavaScript events.
*/