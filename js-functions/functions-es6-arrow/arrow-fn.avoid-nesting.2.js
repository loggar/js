const readItemsJson = (json) => {
  json.forEach((item) => console.log(item.name));
};

const handleButtonClick = () => {
  fetch("/items.json")
    .then((response) => response.json())
    .then(readItemsJson);
};

myButton.addEventListener("click", handleButtonClick);
