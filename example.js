const puppeteer = require('puppeteer');

// Locators
const url           = 'http://avimehenwal.in';
const instagram_url = 'https://www.instagram.com/accounts/login/';
const user          = 'input[name="username"]';
const password      = 'input[name="password"]';
const submit        = 'button[type="submit"]';
// const dialogSel = '//button[text()="Not Now"]';
const dialogSel     = 'div.mt3GC > button:nth-child(2)';
const hearts        = 'article span:nth-child(1) button[type="button"]';

// SECRETS
const INSTA_USER    = process.env.INSTAGRAM_USERNAME || 'Hello';
const INSTA_PASS    = process.env.INSTAGRAM_PASSWORD || 'WorldYoYoYO';

// HELPER FUNCTIONS
function highlightDiv(cssSelector) {
  document.querySelector(cssSelector).style.border = "thick solid #0000FF";
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // devtools: true,
    // slowMo: 250,               // slow down by 250ms
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(instagram_url);

  await page.waitFor(user);
  // await page.type(user, INSTA_USER, {delay: 100});  // Types slower, like a user
  await page.type(user, INSTA_USER);  // Types slower, like a user
  await page.waitFor(password);
  // await page.type(password, INSTA_PASS, {delay: 100});  // Types slower, like a user
  await page.type(password, INSTA_PASS);  // Types slower, like a user
  await page.waitFor(submit);
  await page.click(submit);

  await page.waitForNavigation(); // The promise resolves after navigation has finished
  await page.waitForSelector(dialogSel);
  // await page.click(dialogSel);
  // await page.click(page.$x(dialogSel));
  // console.log(dialogSel);
  await page.click(dialogSel);
  // console.log(await page.$(hearts));
  // await page.$$eval(hearts, heart => {
  //   console.log(heart);
  //   heart.click();
  //   // heart.click is not a function
  //   // Browser context
  // });

  let e_hearts = await page.$$(hearts);
  console.log(e_hearts.length);
  e_hearts[0].click();
  await page.waitFor(250);
  e_hearts[1].click();
  await page.waitFor(250);
  e_hearts[2].click();
  await page.waitFor(250);
  e_hearts[3].click();
  await page.waitFor(250);

  // e_hearts.forEach(element => {
  //   page.evaluate(() => {
  //     element.scrollIntoView();         // scrolls the element's parent containe
  //   });
  //   page.waitForSelector(element, {
  //     visible: true
  //   });
  //   console.log('CLICKED');
  //   element.click();
  //   // page.click(element, {
  //   //   button: 'middle',
  //   //   delay: 10
  //   // });
  // });


  // Handle Dialog window
  // page.on('dialog', async dialog => {
  //   console.log(dialog.message());
  //   await dialog.dismiss();
  //   // await page.click(page.$x(dialogSel));
  //   await page.click(dialogSel);
	// });

  await page.screenshot({path: 'example.png'});
  // await page.evaluate(() => {
  //   debugger;
  //   const btn = document.querySelector('#login');
  //   btn.click();
  // });
  // await page.waitFor(3000);
  // await browser.close();
})();