//Define exceptions.
function MyError(message) {
  const internal = {
    error: new Error(message),
    code: "MY_CUSTOM_ERROR"
  };

  return {
    ...internal,
    toJSON: () => ({
      code: internal.code,
      stack: internal.error.stack,
      message
    })
  };
}

MyError.prototype = Object.create(Error.prototype);
