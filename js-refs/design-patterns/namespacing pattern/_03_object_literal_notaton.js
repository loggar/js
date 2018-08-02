var myApplication = {

    // As we've seen, we can easily define functionality for
    // this object literal..
    getInfo: function () {
        //...
    },

    // but we can also populate it to support
    // further object namespaces containing anything
    // anything we wish:
    models: {},
    views: {
        pages: {}
    },
    collections: {}
};

myApplication.foo = function () {
    return "bar";
}

myApplication.utils = {
    toString: function () {
        //...
    },
    export: function () {
        //...
    }
}

// This doesn't check for existence of "myApplication" in
// the global namespace. Bad practice as we can easily
// clobber an existing variable/namespace with the same name
var myApplication = {};

// The following options *do* check for variable/namespace existence.
// If already defined, we use that instance, otherwise we assign a new
// object literal to myApplication.
//
// Option 1: var myApplication = myApplication || {};
// Option 2: if( !MyApplication ){ MyApplication = {} };
// Option 3: window.myApplication || ( window.myApplication = {} );
// Option 4: var myApplication = $.fn.myApplication = function() {};
// Option 5: var myApplication = myApplication === undefined ? {} : myApplication;


// assumes that we're working in the global namespace, but it could also be written as:
myApplication || (myApplication = {});



// This variation assumes that myApplication has already been initialized and so it's only really useful for a parameter/argument scenario as in the following example:
function foo() {
    myApplication || (myApplication = {});
}

// myApplication hasn't been initialized,
// so foo() throws a ReferenceError

foo();

// However accepting myApplication as an
// argument

function foo(myApplication) {
    myApplication || (myApplication = {});
}

foo();

// Even if myApplication === undefined, there is no error
// and myApplication gets set to {} correctly


// Options 4 can be useful for writing jQuery plugins where:

// If we were to define a new plugin..
var myPlugin = $.fn.myPlugin = function () {
    //... 
};

// Then later rather than having to type:
$.fn.myPlugin.defaults = {};

// We can do:
myPlugin.defaults = {};