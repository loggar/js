class HomePage {
	run(casper) {
		function thenClickInMySection(n, selector) {
			return casper.thenClick(`.my-section:nth-of-type(${n}) ${selector}`);
		}

		function thenScreenshotContainer(name) {
			return casper.thenScreenshot('#container', name);
		}

		casper = casper
			.thenVisit('http://my-url.com/home')
			.thenScreenshot('body', 'home');

		casper = thenClickInMySection(1, '.foo');
		casper = thenScreenshotContainer('foo');
		casper = casper.thenClick('.cancel');
		casper = thenClickInMySection(2, '.bar');
		casper = thenScreenshotContainer('bar');

		return casper;
	}
}