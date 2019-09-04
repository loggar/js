function if_finally_returns() {
  try {
    return 1;
  } catch (e) {
    return -1;
  } finally {
    return 0;
  }
}

console.log(if_finally_returns()); // 0
