// to get the car model
const model = car?.model ?? "default model";

// to get the manufacturer street
const street = car?.manufacturer?.address?.street ?? "default street";

// to check if the car manufacturer is from the USA
const isManufacturerFromUSA = () => {
  if (car?.manufacturer?.address?.state === "USA") {
    console.log("true");
  }
};
