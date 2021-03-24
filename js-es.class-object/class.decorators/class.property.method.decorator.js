//readonly decorator function
function readOnly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Book {
  //Implementation here
  @readOnly
  getBook() {
    return `[${this.name}][${this.ISBN}]`;
  }
}

let obj = new Book("HP", "1245-533552");

obj.getBook = "Hello";

console.log(obj.getBook());
//[HP][1245-533552]
