var b1 = parseInt(1110, 2)
console.log(b1)

var b2 = parseInt(1010, 2)
console.log(b2)

// AND, OR, NOT, NOR

console.log(b1 & b2);
console.log(b1 | b2);
console.log(~b2);
console.log(b1 ^ b2);

const setBit = (num, position) => {
	let mask = 1 << position
	return num | mask
}

// Set the bit at position 1
var b3 = setBit(12, 1) // return 14 -> 1110
console.log(b3)

const clearBit = (num, position) => {
	// We use the ~/NOT operator after placing the bit
	// We want 1s everywhere and 0 only where we want to modify
	let mask = ~(1 << position)

	// We use AND which will modify only the bits compared to 0
	return num & mask
}

var b4 = clearBit(15, 1) // 12 -> 1100
console.log(b4)

const flipBit = (num, position) => {
	let mask = 1 << position
	// If the current state of the bit is 0, XOR will return 1
	// If the bit is 1, XOR will set it to 0
	return num ^ mask
}

var b5 = flipBit(15, 1) // 13 -> 1101
console.log(b5);
