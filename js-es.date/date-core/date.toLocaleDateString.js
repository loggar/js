var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
var event2 = new Date();

var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

console.log(event.toLocaleDateString("de-DE", options));
console.log(event.toLocaleDateString("ar-EG", options));
console.log(event.toLocaleDateString("ko-KR", options));
console.log(event.toLocaleDateString("en-AU", options));
console.log(event.toLocaleDateString("en-US", options));
console.log(event.toLocaleDateString("en-GB", options));

console.log(event2.toLocaleTimeString("de-DE", options));
console.log(event2.toLocaleTimeString("ar-EG", options));
console.log(event2.toLocaleTimeString("ko-KR", options));
console.log(event2.toLocaleTimeString("en-AU", options));
console.log(event2.toLocaleTimeString("en-US", options));
console.log(event2.toLocaleTimeString("en-GB", options));
