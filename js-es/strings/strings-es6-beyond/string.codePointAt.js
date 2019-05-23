const a = '𠮷'.charCodeAt(0).toString(16); //d842
const b = '𠮷'.charCodeAt(1).toString(16); //dfb7

console.log(a);
console.log(b);

console.log('\ud842\udfb7');

console.log('𠮷'.codePointAt(0));

console.log('\u{20bb7}');
