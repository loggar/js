var obj = (function () {
    var a = 0.1, b = 0.01;

    return {
        sum : function () {return a+b;},
        getA: function () {return a;}
    }
})();

console.log(obj.sum());
console.log(obj.getA());
obj.a = 0.2;
console.log(obj.getA());