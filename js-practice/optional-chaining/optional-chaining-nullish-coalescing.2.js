const isManufacturerFromUSA = () => {
  if (
    car &&
    car.manufacturer &&
    car.manufacturer.address &&
    car.manufacturer.address.state === "USA"
  ) {
    console.log("true");
  }
};

checkCarManufacturerState(); // 'true'
