class D {
  logger() {
    return 89;
  }
}

const d = new D();

console.log(void d.logger()); // undefined
