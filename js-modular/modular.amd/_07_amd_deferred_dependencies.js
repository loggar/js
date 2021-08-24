// This could be compatible with jQuery's Deferred implementation,
// futures.js (slightly different syntax) or any one of a number
// of other implementations

define(["lib/Deferred"], function (Deferred) {
    var defer = new Deferred();

    require(["lib/templates/?index.html", "lib/data/?stats"],
        function (template, data) {
            defer.resolve({ template: template, data: data });
        }
    );
    return defer.promise();
});