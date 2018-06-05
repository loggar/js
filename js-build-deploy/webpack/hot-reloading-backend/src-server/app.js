import express from 'express'
import sample from './lib-sample'

const app = express()
app.get('/api', (req, res) => {
	res.send({
		message: 'version hot reloaded : 003',
		sample: sample.fn1()
	})
})
export default app