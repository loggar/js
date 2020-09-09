class DemoClass {
  static #privateStaticMethodInDemoClass() {
    return "Hi from private static method";
  }

  static publicStaticMethodInDemoClass() {
    return DemoClass.#privateStaticMethodInDemoClass();
  }
}

class SubClass extends DemoClass {}

console.log(SubClass.publicStaticMethodInDemoClass());
//"Hi from private static method"
