class DemoClass {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod(number) {
    if (Number.isSafeInteger(number)) DemoClass.#PRIVATE_STATIC_FIELD = number;
    return DemoClass.#PRIVATE_STATIC_FIELD;
  }
}

console.log(DemoClass.publicStaticMethod());
//undefined

console.log(DemoClass.publicStaticMethod(29));
//29

console.log(DemoClass.publicStaticMethod());
//29
