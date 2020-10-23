class Car {
  #fuel = 50;

  getFuel() {
    return this.#fuel;
  }

  setFuel(value) {
    this.#fuel = value;
    if (value > 100) this.#fuel = 100;
  }
}

const car = new Car();
console.log(car.getFuel()); // 50

car.setFuel(3000);
console.log(car.getFuel()); // 100
