var config = {
    writable: true,
    enumerable: true,
    configurable: true
};

var defineProperty = function (obj, name, value) {
    config.value = value;
    Object.defineProperty(obj, name, config);
}

var man = Object.create(null);
defineProperty(man, 'sex', "male");

var yehuda = Object.create(man);
defineProperty(yehuda, 'firstName', "Yehuda");
defineProperty(yehuda, 'lastName', "Katz");

yehuda.sex       // "male"  
yehuda.firstName // "Yehuda"  
yehuda.lastName  // "Katz"

var prot = Object.getPrototypeOf(yehuda) // returns the man object

console.log(man);
console.log(yehuda);
console.log(prot);