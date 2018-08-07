/*
We can have other nested functions and even use them in the exported ones but not expose them.
*/

function Order(items) {
	const total = items => {
		return items.reduce((acc, curr) => {
			return acc + curr.price
		}, 0)
	}

	const addTaxToPrice = price => price + (price * 0.2)

	return {
		calculateTotal: () => {
			return addTaxToPrice(total(items)).toFixed(2)
		}
	}
}

const items = [
	{ name: 'Toy', price: 14.99 },
	{ name: 'Candy', price: 7.99 }
]

const order = Order(items)
console.log(order.total) // undefined
console.log(order.addTaxToPrice) // undefined
console.log(order.calculateTotal()) // 27.58

/*
In this slightly more realistic example we have a function which returns an order object. The only exposed function is calculateTotal. It has a closure over the Order function which allows it to use its variables and passed arguments. It also hides what is actually happening when you are calculating the order total, allowing you to add a shipping cost or something else in the future.
*/