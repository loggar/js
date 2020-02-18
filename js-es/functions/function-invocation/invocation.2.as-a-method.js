const details = {
  name: "Marko",
  getName() {
    return this.name;
  }
};

details.getName(); // returns Marko
// the "this" value inside "getName" method will be the "details" object
