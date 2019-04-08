// No binding of ‘this’

// ES5
var obj = {
	id: 42,
	counter: function counter() {
		setTimeout(function () {
			console.log(this.id);
		}.bind(this), 1000);
	}
};
/*
In the ES5 example, .bind(this) is required to help pass the this context into the function. Otherwise, by default this would be undefined.
*/

// ES6
var obj = {
	id: 42,
	counter: function counter() {
		setTimeout(() => {
			console.log(this.id);
		}, 1000);
	}
};
/*
ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was defined.
*/

/*
hence, we cannot use Arrow Functions in these cases
*/

// Object methods
// `this` in the method is not instance of cat.
var cat = {
	lives: 9,
	jumps: () => {
		this.lives--;
	}
}

// Callback functions with dynamic context
// `this` in the bind callback is not the target button, but instead bound to its parent scope.
var button = document.getElementById('press');
button.addEventListener('click', () => {
	this.classList.toggle('on');
});
