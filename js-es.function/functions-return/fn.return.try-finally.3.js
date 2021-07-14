function catchThis() {
  try {
    throw Error("boom");
  } finally {
    return "phew";
  }
}

// if finally returns, the thrown error is ignored
console.log(catchThis());
