const getData = async () => {
  const response = await fetch("https://abc.def.com/todos/1");
  const data = await response.json();

  console.log(data);
};

getData();

/*
async function getData() {
  let response = await fetch("https://abc.def.com/todos/1");
}

// getData is a promise
getData().then(res => console.log(res)).catch(err => console.log(err); 
*/
