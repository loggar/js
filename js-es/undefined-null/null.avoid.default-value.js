function greetObject(who) {
  if (!who) {
    who = "Stranger";
  }
  return { message: `Hello, ${who}!` };
}

greetObject("Eric"); // => { message: 'Hello, Eric!' }
greetObject(); // => { message: 'Hello, Stranger!' }

function greetObject2(who = "Stranger") {
  return { message: `Hello, ${who}!` };
}

greetObject2("Eric"); // => { message: 'Hello, Eric!' }
greetObject2(); // => { message: 'Hello, Stranger!' }
