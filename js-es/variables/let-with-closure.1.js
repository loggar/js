function abc() {
  let a = {
    x: 3,
  };

  return a;
}

const b = abc();
console.log(b);
b.x = 4;

const c = abc();
console.log(c);
