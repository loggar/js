function quote(str, { char = '"', skipIfQuoted = true } = {}) {
  const length = str.length;
  if (skipIfQuoted && str[0] === char && str[length - 1] === char) {
    return str;
  }
  return char + str + char;
}
quote("Hello World", { char: "*" }); // => '*Hello World*'
quote("Sunny day"); // => '"Sunny day"'
