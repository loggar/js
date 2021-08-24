// There are two ways to properly handle the promise reject. The first is with a try catch block.

(async () => {
  try {
    let num = await promise13();
    console.log('num', num);
  } catch(e) {
    console.log('Error caught');
  }
})();