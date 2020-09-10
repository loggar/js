class DemoClass {
  static #privateStaticMethodInDemoClass() {
    return "Hi from private static method";
  }

  static publicStaticMethodInDemoClass() {
    return this.#privateStaticMethodInDemoClass();
  }
}

class SubClass extends DemoClass {}

console.log(SubClass.publicStaticMethodInDemoClass());
//TypeError....
