async function hi() {
  throw new Error("Whoops!");
}

async function doSomething() {
  let response = await hi();
  return response;
}

doSomething().catch(err => {
  console.log(err);
});
