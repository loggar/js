/* bad example */
function MyObject_1(name, message) {
	this.name = name.toString();
	this.message = message.toString();
	
	this.getName = function() {return this.name;};
	this.getMessage = function() {return this.message;};
}


/* good example 1 */
function MyObject_2(name, message) {
	this.name = name.toString();
	this.message = message.toString();
	
	MyObject_2.prototype = {
			getName : function() {return this.name;},
			getMessage : function() {return this.message;}
	};
}

/* good example 2 */
function MyObject_3(name, message) {
	this.name = name.toString();
	this.message = message.toString();
}

MyObject_3.prototype.getName = function() {return this.name;};
MyObject_3.prototype.getMessage = function() {return this.message;};


