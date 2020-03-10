class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "VALIDATION_ERROR";
    this.message = message;
  }
}

class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "PERMISSION_ERROR";
    this.message = message;
  }
}

class ExecutionError extends Error {
  constructor(message) {
    super(message);
    this.name = "EXECUTION_ERROR";
    this.message = message;
  }
}

module.exports = {
  ValidationError,
  PermissionError,
  DatabaseError
};
