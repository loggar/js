var util_function = (function () {
    return {
        isFunction: function (f) {
            return Object.prototype.toString.call(f) === "[object Function]";
        }
    }
})();

module.exports = util_function;

