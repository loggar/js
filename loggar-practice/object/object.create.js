var {ok, not} = require("../../lib/loggar-test/simple-test.js");

if (!Object.create) {
  Object.create = function(o) {
    if (!o)
      throw new Error("invalid object");
    function F() {
    }
    F.prototype = o;
    return new F();
  }
}

/* test */
var testObj = {};
var instance1 = Object.create(testObj);
var instance2 = Object.create(testObj);
instance2.data = false;
console.log(instance1 === instance2);

ok("object.create - safe instance", instance1 !== instance2);