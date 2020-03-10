function a() {
  if (this.state.data) {
    return this.state.data;
  } else {
    return "Fetching Data";
  }
}

function b() {
  return this.state.data || "Fetching Data";
}
