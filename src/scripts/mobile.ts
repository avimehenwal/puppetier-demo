import puppeteer = require('puppeteer');

const devices = require('puppeteer/DeviceDescriptors');

const main = async () => {
  console.log('poyo');
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.emulate(devices['iPhone X'])


  const url = 'https://google.com/'
  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.screenshot({ path: 'outputs/home1.png' });

  // await page.title() でも良い
  const title = await page.$eval('head > title', e => e.text);

  await browser.close();
}

main();