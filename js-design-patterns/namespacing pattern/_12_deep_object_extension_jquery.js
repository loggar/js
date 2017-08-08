// top-level namespace
var myApp = myApp || {};

// directly assign a nested namespace
myApp.library = {
    foo: function () {
        //...
    }
};

// deep extend/merge this namespace with another
// to make things interesting, let's say it's a namespace
// with the same name but with a different function
// signature: $.extend( deep, target, object1, object2 )
$.extend(true, myApp, {
    library: {
        bar: function () {
            //...
        }
    }
});

console.log("test", myApp);
// myApp now contains both library.foo() and library.bar() methods
// nothing has been overwritten which is what we're hoping for.