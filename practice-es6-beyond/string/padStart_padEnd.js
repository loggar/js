/*
padStart and padEnd allow us to pad a given string with any text of our choosing to ensure a string matches a given length:
*/

// padStart(desiredLength, textToPrepend)

// No text
''.padStart(10, 'Hi') // 'HiHiHiHiHi'

// Some text
'def'.padStart(6, 'abc') // 'abcdef'

// Only use what gets to length
'5678'.padStart(7, '1234') // '1235678'

// padEnd(desiredLength, textToAppend)

'23'.padEnd(8, '0') // '23000000'