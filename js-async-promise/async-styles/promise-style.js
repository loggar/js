const fs = require("fs");
const nl = process.platform === "win32" ? "\r\n" : "\n";

const readFileAsArray = function (file, cb = () => {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function (err, data) {
      if (err) {
        reject(err);
        return cb(err);
      }
      const lines = data.toString().trim().split(nl);
      resolve(lines);
      cb(null, lines);
    });
  });
};

const testFile = "./docs/sample-res/sample.1.txt";

readFileAsArray(testFile)
  .then((lines) => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter((n) => n % 2 === 1);
    console.log("Odd numbers count:", oddNumbers.length);
  })
  .catch(console.error);
