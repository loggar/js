function Person(firstName, lastName, age) {
	var private = 'this is a private member';

	return {
		getName: function () {
			console.log('My name is ' + firstName + ' ' + lastName);
		},
		getAge: function () {
			console.log('I am ' + age + ' years old')
		}
	}
}

let person = new Person('Alex', 'Kondov', 22);
person.getName();
person.getAge();
console.log(person.private); //undefined