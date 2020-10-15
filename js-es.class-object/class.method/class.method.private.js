class DemoClass {
  #privateMethod() {
    return "secret message here";
  }

  getSecretMessage() {
    return this.#privateMethod();
  }
}

class SubClass extends DemoClass {}

const demo = new DemoClass();
demo.getSecretMessage();
//'secret message here'

const subClass = new SubClass();
subClass.getSecretMessage();
//'secret message here'
