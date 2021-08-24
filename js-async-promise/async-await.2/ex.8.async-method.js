class Order {
  async deliver() {
    return await Promise.resolve("Pizza");
  }
}

new Order().delivery().then(console.log); // Pizza
