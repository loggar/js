var person = {
	name: "Stranger",
	age: 24,
	get identity() {
		return { who: this.name, howOld: this.age };
	}
}

console.log(person.identity);
