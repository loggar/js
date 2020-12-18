function greetObject(who) {
  if (!who) {
    return null;
  }
  return { message: `Hello, ${who}!` };
}

greetObject("Eric"); // => { message: 'Hello, Eric!' }
greetObject(); // => null

let who = "";

greetObject(who)?.message ?? "Hello, Stranger!";
// => 'Hello, Stranger
