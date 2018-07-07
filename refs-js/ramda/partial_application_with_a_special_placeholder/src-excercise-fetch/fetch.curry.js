import curry from 'ramda/src/curry'
import __ from 'ramda/src/__'
import fetch from 'node-fetch'

const url_get = 'https://loggar.github.io/js/docs/sample-res/sample.1.json'

fetch(url_get, { method: 'GET' })
	.then(res => res.text())
	.then(body => console.log(body));

const getchGet = null // create a partial application of 'fetch'
const getchPost = null // create a partial application of 'fetch'
