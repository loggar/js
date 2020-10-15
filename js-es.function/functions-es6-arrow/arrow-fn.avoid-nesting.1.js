myButton.addEventListener("click", () => {
  fetch("/items.json")
    .then((response) => response.json())
    .then((json) => {
      json.forEach((item) => {
        console.log(item.name);
      });
    });
});
