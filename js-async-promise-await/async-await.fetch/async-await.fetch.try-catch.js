const getData = async () => {
  try {
    const response = await fetch("https://abc.def.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getData();
