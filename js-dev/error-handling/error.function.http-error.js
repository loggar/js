//Define exceptions.
const BadRequest = () => ({
  message: "Bad Request",
  code: 400
});

const Unauthorized = () => ({
  message: "Unauthorized",
  code: 401
});

const NotFound = () => ({
  message: "Not Found",
  code: 404
});

const InternalServerError = () => ({
  message: "Internal Server Error",
  code: 500
});

const BadGateWay = () => ({
  message: "Bad Gateway",
  code: 502
});

//Define exceptions map.
const exceptionMap = {
  502: BadGateway,
  500: InternalServerError,
  404: NotFound,
  401: Unauthorized,
  400: BadRequest
};

//Using it.
const getUser = async userId => {
  //Make request, this line is just an example, use a real rest client.
  const response = await fetch("http://user.mock/" + userId);

  //Get http-code.
  const { status, body } = response;

  //Get the exception.
  const exception = exceptionMap[status];

  if (!exception) throw exception();
  else return body;
};
