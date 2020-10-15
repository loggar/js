class DemoClass {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod(number) {
    if (Number.isSafeInteger(number)) this.#PRIVATE_STATIC_FIELD = number;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends DemoClass {}

console.log(SubClass.publicStaticMethod());
//TypeError...
//SubClass cannot access the parent's private static field with this keyoword.
