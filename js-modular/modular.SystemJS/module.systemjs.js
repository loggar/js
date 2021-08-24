var SystemJS = require("systemjs");

SystemJS.config({
  map: {
    traceur: "node_modules/traceur/bin/traceur.js",
  },
});

SystemJS.import("./mymodule.js")
  .then(function (main) {
    var t = main.dummyFunction();
    console.log(t);
  })
  .catch(function (e) {
    console.error(e);
  });
