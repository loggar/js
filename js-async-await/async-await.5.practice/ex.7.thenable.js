class Greeting {
  constructor(name) {
    this.name = name;
  }

  then(resolve, reject) {
    console.log(resolve);

    setTimeout(() => resolve(`Hi ${this.name}`));
  }
}

async function greet() {
  const greeting = await Greeting("John");

  console.log(greeting); // Hi John
}

greet();
