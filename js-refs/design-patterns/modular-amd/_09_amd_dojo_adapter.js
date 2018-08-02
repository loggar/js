// "mylib/Array" adapts `each` function to mimic jQuerys:
define(["dojo/_base/lang", "dojo/_base/array"], function (lang, array) {
    return lang.delegate(array, {
        each: function (arr, lambda) {
            array.forEach(arr, function (item, i) {
                lambda.call(item, i, item); // like jQuery's each
            });
        }
    });
});

// Adapter consumer
// "myapp/my-module":
define(["mylib/Array"], function (array) {
    array.each(["uno", "dos", "tres"], function (i, esp) {
        // here, `this` == item
    });
});