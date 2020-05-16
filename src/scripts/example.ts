import config from "../puppetierOptions";
import puppeteer = require('puppeteer');

let output = config.output + 'example.png';

// MAIN

(async () => {
  const browser = await puppeteer.launch(config.launchConfig);
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: output});

  await browser.close();
})();