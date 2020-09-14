const handleButtonClick = async () => {
  const response = await fetch("/items.json");
  const json = await response.json();
  json.forEach((item) => console.log(item.name));
};

myButton.addEventListener("click", handleButtonClick);
