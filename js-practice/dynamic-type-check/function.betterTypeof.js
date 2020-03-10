const typeOfB = value =>
  Object.prototype.toString
    .call(value)
    .split("]")[0]
    .split(" ")[1]
    .toLowerCase();

module.exports = typeOfB;
