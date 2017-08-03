var fromPrototype = function (prototype, object) {
    var newObject = Object.create(prototype);

    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            newObject[prop] = object[prop];
        }
    }

    return newObject;
};

var person = {
    toString: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var man = fromPrototype(person, {
    sex: "male"
});

var jeremy = fromPrototype(man, {
    firstName: "Jeremy",
    lastName: "Ashkenas"
});

jeremy.sex        // "male"  
jeremy.toString() // "Jeremy Ashkenas" 