function manyHappyReturns() {
  try {
    return "one";
  } finally {
    try {
      return "two";
    } finally {
      return "three";
    }
  }
}

// nested finally wins
console.log(manyHappyReturns());
