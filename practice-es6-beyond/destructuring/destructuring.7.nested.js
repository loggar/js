var a1 = [1, [2, 3, 4], 5];
var o1 = { x: { y: { z: 6 } } };

var [a, [b, c, d], e] = a1;
var { x: { y: { z: w } } } = o1;

console.log(a, b, c, d, e);        // 1 2 3 4 5
console.log(w);                    // 6


var App = {
	model: {
		User: function () {
			// ..
		}
	}
};

// instead of:
// var User = App.model.User;

var { model: { User } } = App;

console.log(User);