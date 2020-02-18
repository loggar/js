function doSomething(config) {
  if(config.a) { ... }
  if(config.b) { ... }
  if(config.c) { ... }
}

// parameter destructuring
function doSomething({ a, b, c }) {
  if(a) { ... }
  if(b) { ... }
  if(c) { ... }
}