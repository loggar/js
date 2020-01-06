function add(a, b) {
  return a + b;
}

add(2, 3); // 5

const add7 = add.bind(null, 7);

add7(5); // 12
add7(10); // 17
