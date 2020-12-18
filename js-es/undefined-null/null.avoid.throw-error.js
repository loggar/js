function greetObject(who) {
  if (!who) {
    throw new Error('"who" argument is missing');
  }
  return { message: `Hello, ${who}!` };
}

greetObject("Eric"); // => { message: 'Hello, Eric!' }
greetObject(); // => throws an error
