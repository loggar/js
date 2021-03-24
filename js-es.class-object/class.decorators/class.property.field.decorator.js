function upperCase(target, name, descriptor) {
  if (descriptor.initializer && descriptor.initializer()) {
    let val = descriptor.initializer();
    descriptor.initializer = function () {
      return val.toUpperCase();
    };
  }
}

class Book {
  @upperCase
  id = "az092b";

  getId() {
    return `${this.id}`;
  }

  //other implementation here
}

let obj = new Book("HP", "1245-533552");

console.log(obj.getId());
//AZ092B
