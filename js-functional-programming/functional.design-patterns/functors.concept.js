// A functor is any type that defines how map works.

// fn map of Javascript Arrays

const plus1 = v => v + 1

const r1 = [2].map(plus1)
const r2 = [].map(plus1)
