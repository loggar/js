async function hi() {
  return "Hi from JavaScript";
}

(async () => {
  let response = await hi();
  console.log(response); // 'Hi from JavaScript'
})();
