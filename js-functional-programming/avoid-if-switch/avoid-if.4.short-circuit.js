const isOnline = true;
const makeReservation = () => {};
const user = {
  name: "Damian",
  age: 32,
  dni: 33295000
};

if (isOnline) {
  makeReservation(user);
}

// Refactored
const isOnline = true;
const makeReservation = () => {};
const user = {
  name: "Damian",
  age: 32,
  dni: 33295000
};

//Apply the short circuit to avoid the if.
isOnline && makeReservation(user);
