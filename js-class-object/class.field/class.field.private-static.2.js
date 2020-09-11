class DemoClass {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod(number) {
    if(Number.isSafeInteger(number))
    this.#PRIVATE_STATIC_FIELD = number;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

console.log(DemoClass.publicStaticMethod());
//undefined

console.log(DemoClass.publicStaticMethod(29));
//29

console.log(DemoClass.publicStaticMethod());
//29