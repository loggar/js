var myCar = {
  name: "bmw",
  drive: function() {
    console.log("I am driving!");
  },
  panic: function() {
    console.log("wait, how do you stop this thing?");
  }
};

//Usages:

var yourCar = Object.create(myCar);

console.log(yourCar.name); //'bmw'
