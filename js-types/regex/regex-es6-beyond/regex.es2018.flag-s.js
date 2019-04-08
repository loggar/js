// The s 􀁧ag, short for single line, causes the . to match new line characters as well.
// Without it, the dot matches regular characters but not the new line:

/hi.welcome/.test('hi\nwelcome') // false
/hi.welcome/s.test('hi\nwelcome') // true
