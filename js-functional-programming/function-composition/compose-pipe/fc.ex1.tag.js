const tag = t => contents => `<${t}>${contents}</${t}>`
const r = tag('b')('this is bold!')

console.log(r) // <b>this is bold!</b>
