const User = (name) => {
  this.name = name;
};

const user = new User("Eric Cartman");
// throws "TypeError: User is not a constructor"

/*
function User(name) {
  this.name = name;
}

const user = new User('Eric Cartman');
user instanceof User; // => true
*/
