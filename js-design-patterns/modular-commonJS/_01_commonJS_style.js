// package/lib is a dependency we require
var lib = require("package/lib");

// behaviour for our module
function foo() {
    lib.log("hello world!");
}

// export (expose) foo to other modules
exports.foo = foo;