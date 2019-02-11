// define a namespace we can use later
var ns = ns || {},
    ns2 = ns2 || {};

// the module/namespace creator
var creator = function (val) {

    var val = val || 0;

    this.next = function () {
        return val++
    };

    this.reset = function () {
        val = 0;
    };
};

creator.call(ns);

// ns.next, ns.reset now exist
creator.call(ns2, 5000);

// ns2 contains the same methods
// but has an overridden value for val
// of 5000