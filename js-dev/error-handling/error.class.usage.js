const {
  ValidationError,
  PermissionError,
  DatabaseError
} = require("./error.class.js");

function myThrow(input) {
  if (!input) throw new ExecutionError("A execution error");

  return input;
}
