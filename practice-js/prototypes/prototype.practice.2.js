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
defineProperty(person, 'fullName', function () {
    return this.firstName + ' ' + this.lastName;
});

// this time, let's make man's prototype person, so all
// men share the fullName function
var man = Object.create(person);
defineProperty(man, 'sex', "male");

var yehuda = Object.create(man);
defineProperty(yehuda, 'firstName', "Yehuda");
defineProperty(yehuda, 'lastName', "Katz");

console.log(yehuda.sex);
console.log(yehuda.fullName());