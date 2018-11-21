const encodeAttribute = (x = '') =>
	x.replace(/"/g, '&quot;')

const toAttributeString = (x = {}) =>
	Object.keys(x)
		.map(attr => `${encodeAttribute(attr)}="${encodeAttribute(x[attr])}"`)
		.join(' ')

const tagAttributes = x => (c = '') =>
	`<${x.tag}${x.attr ? ' ' : ''}${toAttributeString(x.attr)}>${c}</${x.tag}>`

const tag = x =>
	typeof x === 'string'
		? tagAttributes({ tag: x })
		: tagAttributes(x)


const bold = tag('b')

const r1 = bold('this is bold!')
console.log(r1) // <b>this is bold!</b>

const r2 = tag('b')('this is bold!')
console.log(r2) // <b>this is bold!</b>

const r3 = tag({ tag: 'div', attr: { 'class': 'title' } })('this is a title!')
console.log(r3) // <div class="title">this is a title!</div>
