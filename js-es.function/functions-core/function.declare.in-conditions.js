(function () {
  "use strict";
  let ok; // <== should be declared in a proper scope
  if (true) {
    ok = function () {
      return "true ok";
    };
  } else {
  }
  console.log(typeof ok === "function"); // => true
  console.log(ok()); // => 'true ok'
})();
