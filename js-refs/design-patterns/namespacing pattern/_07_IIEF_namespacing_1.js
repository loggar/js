// an (anonymous) immediately-invoked function expression
(function () { /*...*/ })();

// a named immediately-invoked function expression
(function foobar() { /*..*/ })();


// named self-executing function
function foobar() { foobar(); }

// anonymous self-executing function
var foobar = function () { arguments.callee(); }


var namespace = namespace || {};

// here a namespace object is passed as a function
// parameter, where we assign public methods and
// properties to it
(function (o) {
    o.foo = "foo";
    o.bar = function () {
        return "bar";
    };
})(namespace);

console.log(namespace);