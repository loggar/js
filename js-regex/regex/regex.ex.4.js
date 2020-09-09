/* Character class */
var re1 = /[AEIOU]/;
re1.exec("Oval"); // returns ["O", index: 0, input: "Oval"]
re1.exec("2456"); // null
var re2 = /[1-9]/;
re2.exec('mp4'); // returns ["4", index: 2, input: "mp4"]

/* Characters */
var re4 = /\d\D\w/;
re4.exec('1232W2sdf'); // returns ["2W2", index: 3, input: "1232W2sdf"]
re4.exec('W3q'); // returns null

/* Boundaries */
var re5 = /^\d\D\w/;
re5.exec('2W34'); // returns ["2W3", index: 0, input: "2W34"]
re5.exec('W34567'); // returns null
var re6 = /^[0-9]{5}-[0-9]{5}-[0-9]{5}$/;
re6.exec('23451-45242-99078'); // returns ["23451-45242-99078", index: 0, input: "23451-45242-99078"]
re6.exec('23451-abcd-efgh-ijkl'); // returns null

/* Quantifiers */
var re7 = /\d+\D+$/;
re7.exec('2abcd'); // returns ["2abcd", index: 0, input: "2abcd"]
re7.exec('23'); // returns null
re7.exec('2abcd3'); // returns null
var re8 = /<([\w]+).*>(.*?)<\/\1>/;
re8.exec('<p>Hello JS developer</p>'); //returns  ["<p>Hello JS developer</p>", "p", "Hello JS developer", index: 0, input: "<p>Hello JS developer</p>"]