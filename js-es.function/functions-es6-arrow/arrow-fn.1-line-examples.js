// Generate a Random Boolean
const randomBoolean = () => Math.random() >= 0.5;

// Generate a Random Number
const randomNumber = (max) => Math.round(Math.random() * max);
const randomNumberRange = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

// Generate a Random ID
const randomId = () => Math.random().toString(36).substring(2) || "0";

// Generate a Random Hex Number
const randomHex = () =>
  `#${(0x1000000 + Math.random() * 0xffffff).toString(16).slice(1, 7)}`;

// Generate a Random Hex Number (ES7)
const randomHex = () =>
  `#${Math.random().toString(16).slice(2, 9).padEnd(6, "0")}`;

// Initialize A Number Array
const generateSortedNumberArray = (length) => [...Array(length).keys()];

// Initialize A Boolean Array
const booleanArray = (length, value = false) => Array(length).fill(value);

// Remove Duplicates From An Array
const removeDuplicates = (target) => [...new Set(target)];

// Shuffle An Array
const shuffleArray = (target) => [...target].sort(() => Math.random() - 0.5);
