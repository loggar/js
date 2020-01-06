const user = {
  age: 20,
  getAge: function() {
    return this.age;
  },
  getContext: function() {
    return this;
  }
};

user.getAge(); // 20
user.getContext(); // {age: 20, getAge: ƒ, getContext: ƒ}
