var config = {
    writable: true,
    enumerable: true,
    configurable: true
};

var defineProperty = function (obj, name, value) {
    config.value = value;
    Object.defineProperty(obj, name, config);
}

var person = Object.create(null);
defineProperty(person, 'firstName', "Yehuda");
defineProperty(person, 'lastName', "Katz");

console.log(person);