// dealing with unexpected data

function exists(value) {
  return value
    ? Promise.resolve(value)
    : Promise.reject(`Invalid value: ${value}`);
}

async function foo(num) {
  return exists(num).then((v) => 23 * v);
}

function init(n) {
  foo(n).then(console.log).catch(console.error);
}

init(12); // 276
init(null); // Invalid value: null
