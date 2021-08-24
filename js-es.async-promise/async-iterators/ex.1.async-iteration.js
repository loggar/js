// "for-await-of" allows you to use an async iterable objects as the loop iteration:

for await (const line of readLines(filePath)) {
  console.log(line);
}

// Since this uses await , you can use it only inside async functions, like a normal await
