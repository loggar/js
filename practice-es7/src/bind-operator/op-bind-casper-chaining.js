class HomePage {
	run(casper) {
		function thenClickInMySection(n, selector) {
			return this.thenClick(`.my-section:nth-of-type(${n}) ${selector}`);
		}

		function thenScreenshotContainer(name) {
			return this.thenScreenshot('#container', name);
		}

		return casper
			.thenVisit('http://my-url.com/home')
			.thenScreenshot('body', 'home')
		:: thenClickInMySection(1, '.foo')
		:: thenScreenshotContainer('foo')
			.thenClick('.cancel')
		:: thenClickInMySection(2, '.bar')
		:: thenScreenshotContainer('bar');
	}
}