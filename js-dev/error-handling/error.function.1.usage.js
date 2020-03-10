const {
  ValidationError,
  PermissionError,
  DatabaseError
} = require("./error.function.1.js");

function myThrow(input) {
  if (!input) throw ExecutionError("A execution error");

  return input;
}
