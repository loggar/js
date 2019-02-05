var fetch = fetch;

// node-process: use node-fetch
if (
  !(
    typeof fetch === "function" || toString.call(fetch) === "[object Function]"
  ) &&
  typeof module !== "undefined" &&
  module.exports
) {
  fetch = require("node-fetch");
}

var fn1 = function(type) {
  if (!type) {
    return 0;
  }
  fetch("https://loggar.github.io/note/sample-res/sample.1.json")
    .then(res => res.json())
    .then(json => console.log(json.test + " " + type))
    .catch(err => console.error(err));
  return type;
};

var fn1Sync = function(type) {
  if (!type) {
    return 0;
  }
  return type;
};

var r = "";

r += fn1("A");
r += fn1("B");
r += fn1("C");
r += fn1("D");
r += fn1("E");
r += fn1("F");
r += fn1("G");
r += fn1("H");

console.log("fn1", r);

r = "";

r += fn1Sync("A");
r += fn1Sync("B");
r += fn1Sync("C");
r += fn1Sync("D");
r += fn1Sync("E");
r += fn1Sync("F");
r += fn1Sync("G");
r += fn1Sync("H");

console.log("fn1Sync:", r);
