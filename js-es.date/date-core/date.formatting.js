var d = new Date();
var n = d.toString();

console.log(n);

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

today.toDateString(); // "Sun Jun 14 2020"
today.toISOString(); // "2020-06-13T18:30:00.000Z"
today.toUTCString(); // "Sat, 13 Jun 2020 18:30:00 GMT"
today.toLocaleDateString(); // "6/14/2020"
