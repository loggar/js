function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
  }
  var newCar = new Car('Honda', 'City', 2007);
  console.log(newCar instanceof Car); // returns true