// Mixins are classes that offer functionality that can be easily inherited by a sub-class or group of sub-classes for the purpose of the function reuse.

var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = "male";
};

var clark = new Person("Clark", "kent");

var Superhero = function(firstName, lastName, powers) {
  Person.call(this.firstName, this.lastName);
  this.powers = powers;
};

SuperHero.prototype = Object.create(Person.prototype);
var superman = new Superhero("Clark", "Kent", ["flight", "heat-vision"]);

console.log(superman); //output personal attributes as well as power
