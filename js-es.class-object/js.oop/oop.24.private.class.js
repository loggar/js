class Car {
  #fuel = 50;

  get fuel() {
    return this.#fuel;
  }

  set fuel(value) {
    this.#fuel = value;
    if (value > 100) this.#fuel = 100;
  }
}

const car = new Car();
console.log(car.fuel); // 50

car.fuel = 3000;
console.log(car.fuel); // 100
