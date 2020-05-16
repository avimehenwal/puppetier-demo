import config from "../puppetierOptions";
import puppeteer = require('puppeteer');

// doesnt work in headless false mode
config.launchConfig.headless = true;
const output = config.output + 'hn.pdf';
const url: string = 'https://news.ycombinator.com';

// MAIN
(async () => {
  const browser = await puppeteer.launch(config.launchConfig);
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle2'});
  await page.pdf({
    path: output,
    format: 'A4'
  });
  await browser.close();
})();