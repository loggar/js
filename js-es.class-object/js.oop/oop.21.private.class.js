class Car {
  constructor() {
    // Denotes that `_fuel` is private. Don't use it!
    this._fuel = 50;
  }

  getFuel() {
    return this._fuel;
  }

  setFuel(value) {
    this._fuel = value;
    // Caps fuel at 100 liters
    if (value > 100) this._fuel = 100;
  }
}

const car = new Car();
console.log(car.getFuel()); // 50

car.setFuel(3000);
console.log(car.getFuel()); // 100

car.fuel = 200;
console.log(car.getFuel()); // 100

// But _fuel is not actually private. It is still a public variable. You can still access it, you can still use it, and you can still abuse it (even if the abusing part is an accident).
car._fuel = 3000;
console.log(car.getFuel()); // 3000
