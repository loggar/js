import { validate } from "jsonschema";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static schema() {
    return {
      type: "object",
      properties: {
        name: {
          type: "string",
          minLength: 3,
          maxLength: 30,
        },
        age: { type: "integer", minimum: 0 },
      },
      required: ["name", "age"],
    };
  }
}

let p1 = new Person("abc", 103);
console.log(validate(p1, Person.schema()));

let p2 = new Person("abc", -1);
console.log(validate(p2, Person.schema()));
