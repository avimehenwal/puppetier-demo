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
const _heart        = ' span:nth-child(1) button[type="button"]'
const _header       = ' header a'
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
  console.log('PAGE TITLE : ', page.title());
  await page.click(dialogSel);
  // console.log(await page.$(hearts));
  // await page.$$eval(hearts, heart => {
  //   console.log(heart);
  //   heart.click();
  //   // heart.click is not a function
  //   // Browser context
  // });

  // const iterations = 10;
  // let article = await page.$$('article');
  // console.log('article ON PAGE = ', article.length);
  // for (let i=0; i<article.length; i++) {
  //   console.log('ITERATING : ', i);
  //   // let article = await page.$$('article')[i];
  //   // console.log(article[i]);
  //   let text = await page.evaluate(el => el.textContent, article[i] + _header);
  //   console.log('HEADER = ', text);
  //   // let header = article.$('article' + _header);

  //   // let header = 'article' + _header
  //   // let element = await page.$(header)
  //   // let value = await page.evaluate(el => el.textContent, element)
  //   // console.log('CLICKING post from - ', value)
  //   // e_hearts[i].click();
  //   await page.waitFor(250);
  // }

  let articles = await page.$$('article');
  console.log('LEN ', articles.length)
  for (let article of articles) {
    let title = await article.$eval('header a', el => el.innerText.trim());
    console.log('TITLE ', title);
    // await article.$eval(_heart, el => el.click());
  }

  // LOAD MORE

  // await page.evaluate(() => {
    //   debugger;
    //   const btn = document.querySelector('#login');
    //   btn.click();
    // });
    await page.screenshot({path: 'example.png'});
  // await page.waitFor(3000);
  // await browser.close();
})();