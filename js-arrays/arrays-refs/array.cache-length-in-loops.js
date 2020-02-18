for (let i = 0; i < array.length; i++) {
  console.log(i);
}

for (let i = 0, length = array.length; i < length; i++) {
  console.log(i);
}

/*
This code is almost as concise as the code above, but it means that as an array increases in size, no run-time is lost to re-consulting array.length .
*/
