function testBlock() {
  if (true) {
    let z = 5;
  }
  return z;
}

testBlock(); // Throws a ReferenceError "z" is not defined
