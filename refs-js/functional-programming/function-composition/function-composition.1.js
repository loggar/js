const split = str => str.split(' ')
const count = arr => arr.length

const text = "Hello Function Composition"
const wordCount = count(split(text))

console.log(wordCount) // 3


// equals

const words = split(text)
const numWords = count(words)

console.log(numWords) // 3
