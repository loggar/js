function one() {
  return arguments;
}
const two = function() {
  return arguments;
};
const three = function three() {
  return arguments;
};

const four = () => arguments;

four(); // Throws an error  - arguments is not defined
