const fetch = require("node-fetch");

// Async generators: Creating your own async iterator

// Async generators a mixture of async functions and generators. Let's say we wanted to create an iterator that returned random numbers, but those random numbers came from a web service:

// Note the * after "function"
async function* asyncRandomNumbers() {
  // This is a web service that returns a random number
  const url =
    "https://www.random.org/decimal-fractions/?num=1&dec=10&col=1&format=plain&rnd=new";

  while (true) {
    const response = await fetch(url);
    const text = await response.text();
    yield Number(text);
  }
}

// This iterator doesn't have a natural end – it'll just keep fetching numbers. Thankfully, you can use break to stop it:

async function example() {
  for await (const number of asyncRandomNumbers()) {
    console.log(number);
    if (number > 0.95) break;
  }
  console.log("example stop.");
}

example();
