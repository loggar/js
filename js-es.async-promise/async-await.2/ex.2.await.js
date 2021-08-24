async function hi() {
  return "Hi from JavaScript";
}

const doSomething = async () => {
  console.log(await hi());
};

doSomething();
