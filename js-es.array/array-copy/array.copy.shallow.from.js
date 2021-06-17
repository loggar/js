const emojiArray = ["a", "b", "c"];
console.log(...emojiArray); // a b c

// The assignment operator = will only copy the reference to the original array
const emojiArrayNotCopied = emojiArray;
console.log(emojiArrayNotCopied === emojiArray); // true -- Both variables reference the original array

// Make a shallow copy using Array.from:
const emojiArrayShallowCopy = Array.from(emojiArray);
console.log(emojiArrayShallowCopy === emojiArray); // false -- The variables reference different arrays

emojiArray[0] = "x"; // Change a value in the original array

// The assignment operator does not copy the array, so changes to the original will affect the uncopied arary
console.log(...emojiArray); // x b c
console.log(...emojiArrayNotCopied); // x b c
console.log(...emojiArrayShallowCopy); // a b c

// Recap: Like other shallow copy methods, Array.from will make a shallow clone for arrays containing just values.
// But for deeply nested arrays that contain other arrays or objects, you need to deep copy, so Array.from won't work.
