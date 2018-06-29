// typical code you might stumble upon
function saveCustomer(customer) {
	if (isCustomerValid(customer)) {
		database.save(customer)
	} else {
		console.log('customer is invalid')
	}
}
// ternary equivalent
function saveCustomer(customer) {
	return isCustomerValid(customer)
		? database.save(customer)
		: console.log('customer is invalid')
}
// ES6 style
const saveCustomer = customer =>
	isCustomerValid(customer)
		? database.save(customer)
		: console.log('customer is invalid')

/*
if - elseif - else
*/

// old school else-if
function customerValidation(customer) {
	if (!customer.email) {
		return error('email is require')
	} else if (!customer.login) {
		return error('login is required')
	} else if (!customer.name) {
		return error('name is required')
	} else {
		return customer
	}
}
// ES6 style custom formatted ternary magic
const customerValidation = customer =>
	!customer.email ? error('email is required')
		: !customer.login ? error('login is required')
			: !customer.name ? error('name is required')
				: customer
