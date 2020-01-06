const user = {
  name: "Bob",
  greet: function() {
    return "Hello " + this.name;
  }
};

const button = document.getElementById("btn");
button.addEventListener("click", user.greet); // Hello undefined
button.addEventListener("click", user.greet.bind(user)); // Hello Bob
