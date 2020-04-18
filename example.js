const puppeteer = require('puppeteer');
const url = 'http://avimehenwal.in';
const instagram_url = 'https://www.instagram.com/accounts/login/';

// Locators
const user = 'input[name="username"]';
const password = 'input[name="password"]';
const submit = 'button[type="submit"]';


(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(instagram_url);

  await page.waitFor(user);
  await page.type(user, 'Hello', {delay: 100});  // Types slower, like a user
  await page.waitFor(password);
  await page.type(password, 'Worldhahahahh', {delay: 100});  // Types slower, like a user
  await page.waitFor(submit);
  page.click(submit);

  await page.screenshot({path: 'example.png'});
  await page.evaluate(() => {
    debugger;
    // const btn = document.querySelector('#login');
    // btn.click();
  });
  await browser.close();
})();