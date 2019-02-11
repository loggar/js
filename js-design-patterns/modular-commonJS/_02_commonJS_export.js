// define more behaviour we would like to expose
function foobar() {
    this.foo = function () {
        console.log("Hello foo");
    }

    this.bar = function () {
        console.log("Hello bar");
    }
}

// expose foobar to other modules
exports.foobar = foobar;

// an application consuming "foobar"

// access the module relative to the path
// where both usage and module files exist
// in the same directory

var foobar = require("./foobar").foobar,
    test = new foobar();

// Outputs: "Hello bar"
test.bar();