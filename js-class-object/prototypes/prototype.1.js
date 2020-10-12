var o = {
		a : 1
};

var a = ["str_1", "str_2"];

var f = function() {
	return "f()";
};

console.log(o.__proto__);
console.log(a.__proto__);
console.log(f.__proto__);

var Animal = {
		eat : true,
		eats : function() {
			return "Animal : eat()";
		},
		breath : function() {
			return "Animal : breath()";
		}
};

var Rabbit = {
		name : "rabbit",
		
		eats : function() {
			return "Rabbit : eats()";
		}
};

Rabbit.__proto__ = Animal;

console.log(Animal);
console.log(Rabbit);
console.log(Animal.eats);
console.log(Rabbit.eats);
console.log(Rabbit.breath);

/*
 * Object.create(prototype)
 */
var rabbit_1 = Object.create(Rabbit);

console.log(rabbit_1.name);
console.log(rabbit_1.eats());
console.log(rabbit_1.breath());
