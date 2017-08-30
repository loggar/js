function toMoneyFormat(target) {
	/* jshint ignore:start */
	var formatter = new Intl.NumberFormat('en-AU', {
		// style : 'currency',
		// currency : 'AUD',
		minimumFractionDigits : 2,
		maximumFractionDigits : 2
	});

	return formatter.format(target);
	/* jshint ignore:end */
}

/* test */
console.log(toMoneyFormat(1234567));
console.log(toMoneyFormat(1234567.123456));
console.log(toMoneyFormat(1.1));
console.log(toMoneyFormat(1.111));
console.log(toMoneyFormat(1.1001));
console.log(toMoneyFormat(1));

console.log(toMoneyFormat("1234567"));
console.log(toMoneyFormat("1234567.123456"));
console.log(toMoneyFormat("1.1"));
console.log(toMoneyFormat("1.111"));
console.log(toMoneyFormat("1.1001"));
console.log(toMoneyFormat("1"));