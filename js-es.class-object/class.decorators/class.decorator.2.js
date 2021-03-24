function logWithParams(...params) {
  return function (target) {
    return function (...args) {
      console.table(params);
      return new target(...args);
    };
  };
}

@log
@logWithParams("param1", "param2")
class Book {
  //Class implementation as before
}

let obj = new Book("HP", "1245-533552");
//Constructor called
//Params will be consoled as a table
console.log(obj.getBook());
//[HP][1245-533552]
