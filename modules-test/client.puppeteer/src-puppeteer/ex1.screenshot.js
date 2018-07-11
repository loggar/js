const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://logrocket.com');
	await page.screenshot({
		path: path.join(__dirname, 'screenshot', 'logrocket_1.png')
	});
	await page.screenshot({
		path: path.join(__dirname, 'screenshot', 'logrocket_2.png'),
		fullPage: true
	});

	browser.close();
})();
