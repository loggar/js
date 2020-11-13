async function foo() {
  throw Error('bar');
}
foo().catch(console.log);