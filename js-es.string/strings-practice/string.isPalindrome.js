function isPalindrome(word) {
  const length = word.length;
  const half = Math.floor(length / 2);
  for (let index = 0; index < half; index++) {
    if (word[index] !== word[length - index - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("madam")); // => true
console.log(isPalindrome("hello")); // => false
console.log(isPalindrome("abcdefedcba")); // => true
