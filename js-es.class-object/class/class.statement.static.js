var age = 23;
class NewClass {
  static {
    var age = 99; // can still use age inside the static block
    //because it creates as new lexical scope
    var name = "Lawrence Eagles";

    console.log(age);
    console.log(name);
  }
}

console.log(age);
