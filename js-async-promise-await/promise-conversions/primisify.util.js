const { promisify } = require("util");

function addCallback(a, b, callback) {
  callback(a + b);
}

const asyncAdd = promisify(addCallback);
asyncAdd(3, 6).then(res => console.log(res)); // "9"
