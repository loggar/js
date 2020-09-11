class DemoClass {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod(number) {
    if (Number.isSafeInteger(number)) DemoClass.#PRIVATE_STATIC_FIELD = number;
    return DemoClass.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends DemoClass {}

console.log(SubClass.publicStaticMethod());
//undefined

console.log(SubClass.publicStaticMethod(26));
//26

console.log(SubClass.publicStaticMethod());
//26
