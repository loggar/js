const encodeAttribute = (x = '') =>
	x.replace(/"/g, '&quot;')

const toAttributeString = (x = {}) =>
	Object.keys(x)
		.map(attr => `${encodeAttribute(attr)}="${encodeAttribute(x[attr])}"`)
		.join(' ')

const tagAttributes = x => c =>
	`<${x.tag}${x.attr ? ' ' : ''}${toAttributeString(x.attr)}>${c}</${x.tag}>`

const r = tagAttributes({ tag: 'div', attr: { 'class': 'title' }})('this is a title!')

console.log(r) // <div class="title">this is a title!</div>
