/* In addition to String#indexOf(..) and String#lastIndexOf(..) from prior to ES6, three new methods for searching/inspection have been added: startsWith(..), endsWith(..), and includes(..). */

var palindrome = "step on no pets";

palindrome.startsWith("step on");    // true
palindrome.startsWith("on", 5);    // true

palindrome.endsWith("no pets");    // true
palindrome.endsWith("no", 10);    // true

palindrome.includes("on");        // true
palindrome.includes("on", 6);        // false