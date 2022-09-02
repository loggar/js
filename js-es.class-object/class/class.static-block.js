class Foo {
  static bar;
  static {
    this.bar = 10;
  }
}

console.log(Foo.bar);
