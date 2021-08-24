const fs = require("fs");
const nl = process.platform === "win32" ? "\r\n" : "\n";

const readFileAsArray = function (file, cb) {
  fs.readFile(file, function (err, data) {
    if (err) {
      return cb(err);
    }
    const lines = data.toString().trim().split(nl);
    cb(null, lines);
  });
};

const testFile = "./docs/sample-res/sample.1.txt";

readFileAsArray(testFile, (err, lines) => {
  if (err) throw err;

  console.log(lines);
});

// with filter
readFileAsArray(testFile, (err, lines) => {
  if (err) throw err;
  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter((n) => n % 2 === 1);
  console.log("Odd numbers count:", oddNumbers.length);
});
