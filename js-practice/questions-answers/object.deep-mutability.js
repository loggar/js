const user = {
  name: "Joe",
  age: 25,
  pet: {
    type: "dog",
    name: "Buttercup",
  },
};

Object.freeze(user);

user.pet.name = "Daffodil";

console.log(user.pet.name);

// Object.freeze will perform a shallow freeze on an object, but will not protect deep properties from being mutated.
// In this example, we would not be able to mutate user.age, but we have no problem mutating user.pet.name.
// If we feel we need to protect an object from being mutated "all the way down," we could recursively apply Object.freeze or use an existing "deep freeze" library.
