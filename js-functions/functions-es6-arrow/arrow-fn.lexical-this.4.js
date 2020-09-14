const object = {
  items: [1, 2],

  method() {
    this === object; // => true
    this.items.forEach(() => {
      this === object; // => true
    });
  },
};

object.method();
