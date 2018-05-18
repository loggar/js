var isFunction = require("./function_util.js").isFunction;

var f = function () {
    console.log("this is function");
}

var o = (function() {
    return {
        f: function() {
            console.log("function in object");
        }
    }
})();

console.log(isFunction(f));
console.log(isFunction(o.f));
console.log(isFunction({x:1}));
