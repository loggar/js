function getName() {
  return this.name;
}

getName(); // undefined, because "this" refers to Window
getName.bind({ name: "Bob" }); // Bob
getName.bind({ name: "Jane" }); // Jane

const user = {
  age: 20,
  getAge: function() {
    return this.age;
  }
};

user.getAge(); // 20;

const getUserAge = user.getAge;
getUserAge(); // undefined

const getUserAge = function() {
  return this.age; // "this" will refer to "window" object
};

const getUserAge = user.getAge.bind(user);

getUserAge(); // 20
