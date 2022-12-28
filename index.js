const puppeteer = require('puppeteer');

async function run() {
	// await pkg.open2('https://api.myip.com');
	// let r = await pkg.runGetStock('https://api.myip.com',null);
	// console.log(r);
	const browser = await puppeteer.launch({headless:false});
	const page = await browser.newPage();
	await page.goto('https://baidu.com');
}
run();