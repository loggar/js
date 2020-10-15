class DemoClass {
  static #privateStaticMethodInDemoClass() {
    return "Hi from private static method";
  }

  static publicStaticMethodInDemoClass() {
    return this.#privateStaticMethodInDemoClass();
  }
}

console.log(DemoClass.publicStaticMethodInDemoClass());
//'Hi from private static method'
