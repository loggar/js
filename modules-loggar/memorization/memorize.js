function memorize (f) {
    var cache = {}

    return function () {
        var key = arguments.length + " " + Array.prototype.join.call(arguments,",");
        if(key in cache) {
            console.log("result in cache: " + key);
            return cache[key];
        } else {
            console.log("result not in cache: " + key);
            return cache[key] = f.apply(this, arguments);
        }
    };
}

module.exports = memorize;