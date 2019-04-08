var alex = { firstName: "Alex", lastName: "Russell" };

alex.toString() // "[object Object]"

var brendan = {
    firstName: "Brendan",
    lastName: "Eich",
    toString: function () { return "Brendan Eich"; }
};

brendan.toString() // "Brendan Eich"