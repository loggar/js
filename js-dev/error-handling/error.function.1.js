const ValidationError = message => ({
  error: new Error(message),
  code: "VALIDATION_ERROR"
});

const PermissionError = message => ({
  error: new Error(message),
  code: "PERMISSION_ERROR"
});

const ExecutionError = message => ({
  error: new Error(message),
  code: "EXECUTION_ERROR"
});
