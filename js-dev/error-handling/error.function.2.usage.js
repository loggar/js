const {
  ValidationError,
  PermissionError,
  DatabaseError
} = require("./error.function.2.js");

function myThrow(input) {
  //Launch
  throw new MyError("So bad configuration");
}

function myCapturing(input) {
  //Capturing.
  try {
    //.....
    throw new MyError("So bad configuration");
    //.....
  } catch (err) {
    console.log("Error", err.toJSON());
  }
}
