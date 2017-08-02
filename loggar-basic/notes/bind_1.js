/**
 * it fires context problem of using this-reference
 */
function Person_01_problematic(name) {
	this.name = name;
	
	this.distractedGreeting = function() {
		console.log(this);
		
		setTimeout(function() {
			console.log("Hello, my name is " + this.name);
			console.log(this);	// [this] have turned out the window object which is owner of setTimeout() function.
		}, 500);
	};
}
	
function Person_02_self(name) {
	this.name = name;
	
	this.distractedGreeting = function() {
		var self = this;
		
		setTimeout(function() {
			console.log("Hello, my name is " + self.name);
			
			console.log("[this] "); console.log(this);
			console.log("[self] "); console.log(self);
		}, 500);
	};
}

function Person_03_bind(name) {
	this.name = name;
	
	this.distractedGreeting = function() {
		setTimeout(function() {
			console.log("Hello, my name is " + this.name);
			
			console.log(this); 
			
			// now I can not refer [this] for window context. [bind] have relocated context.
			// console.log(this.location.origin); // function_prototype_bind.html:53 Uncaught TypeError: Cannot read property 'origin'
			// if you want to refer [this] as in window context, Try the way of Person_02_self, not [bind] method.
		}.bind(this), 500);
	};
}

/*
(new Person_01_problematic("Alice")).distractedGreeting();
(new Person_02_self("Alice")).distractedGreeting();
*/

(new Person_03_bind("Alice")).distractedGreeting();

