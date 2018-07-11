const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://yomieluwande.me', { waitUntil: 'networkidle' });
	await page.pdf({ path: 'YE.pdf', format: 'A4' });
	browser.close();
})();
