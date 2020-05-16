import puppeteer = require('puppeteer');

let launchConfig = {
  headless: true        // doesnt work in headless false mode
};

let output: string = "outputs/hn.pdf";

(async () => {
  const browser = await puppeteer.launch(launchConfig);
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.pdf({
    path: output,
    format: 'A4'
  });

  await browser.close();
})();