async function hi() {
  throw new Error("Whoops!");
}

async function doSomething() {
  try {
    let response = await hi();
    return response;
  } catch (err) {
    console.log(err);
  }
}

doSomething();
