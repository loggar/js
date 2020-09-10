class DemoClass {
  #privateFieldInDemoClass;

  constructor() {
    this.#privateFieldInDemoClass = "See me if you can";
    this.#fieldNotDeclared = "I have not been declared";
    //This will give a syntax error
  }

  get valueOfPrivateField() {
    return this.#privateFieldInDemoClass;
  }
}

const instanceOfDemoClass = new DemoClass();
console.log(instanceOfDemoClass.#privateFieldInDemoClass);
//Syntax Error

console.log(instanceOfDemoClass.valueOfPrivateField);
//'See me if you can'
