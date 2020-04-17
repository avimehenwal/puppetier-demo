const puppeteer = require('puppeteer');
const url = 'http://avimehenwal.in';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();