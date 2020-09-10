const collection = {
  items: [1, 2, 3],
  isEmpty: () => {
    this === collection; // => false
    this === window; // => true
    return this.items.length === 0;
  },
};

collection.isEmpty(); // throws "TypeError: this.items is undefined"
