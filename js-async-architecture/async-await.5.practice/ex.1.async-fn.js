async function hi() {
  return "Hi from JavaScript";
}

hi(); // Promise {<resolved>: "Hi from JavaScript"}

hi().then(console.log); // 'Hi from JavaScript'
