const car = {
  model: "Fiesta",
  manufacturer: {
    name: "Ford",
    address: {
      street: "Some Street Name",
      number: "5555",
      state: "USA"
    }
  }
};

// to get the car model
const model = (car && car.model) || "default model";

// to get the manufacturer street
const street =
  (car &&
    car.manufacturer &&
    car.manufacturer.address &&
    car.manufacturer.address.street) ||
  "default street";

// request an un-existing property
const phoneNumber =
  car &&
  car.manufacturer &&
  car.manufacturer.address &&
  car.manufacturer.phoneNumber;

console.log(model); // 'Fiesta'
console.log(street); // 'Some Street Name'
console.log(phoneNumber); // undefined
