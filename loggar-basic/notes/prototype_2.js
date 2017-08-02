function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);

	this.getFullName = function() {
		return this.firstName + " " + this.lastName;
	};

	this.getAge = function() {
		var today = new Date();
		var birthday = new Date(this.dob);
		var years = today.getFullYear() - birthday.getFullYear();
		birthday.setFullYear(this.dob.getFullYear());

		if (this.today < this.birthday) {
			this.years--;
		}
		return years;
	};

	return (this.getFullName() + " " + this.dob + " " + this.getAge() + " years old.");
}

var person_as_a_fn = new Person("Dave", "Gahan", "1962-05-09");
console.log(person_as_a_fn);

var person_as_an_object = new Person("Adam", "Ant", "1972-05-09");
console.log(person_as_an_object);
console.log("person_as_an_object.getAge() " + person_as_an_object.getAge());

person_as_an_object.bio = "some string data for person_as_an_object";
console.log(person_as_an_object);

/*
 * check __proto__ of the person_as_an_object instance.
 */
/* jshint ignore:start */
console.log(person_as_an_object.__proto__);
console.log(person_as_an_object.__proto__.__proto__);
console.log(person_as_an_object.__proto__.__proto__.__proto__);
/* jshint ignore:end */
