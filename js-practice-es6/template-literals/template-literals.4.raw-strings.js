function showraw(strings, ...values) {
	console.log(strings);
	console.log(strings.raw);
}

showraw`Hello\nWorld`;
// [ "Hello
// World" ]
// [ "Hello\nWorld" ]



console.log(`Hello\nWorld`);
// Hello
// World

console.log(String.raw`Hello\nWorld`);
// Hello\nWorld

String.raw`Hello\nWorld`.length;
// 12