# puppetier-demo

> puppetier demo project

```sh
yarn add puppeteer

error puppeteer@3.0.0: The engine "node" is incompatible with this module. Expected version ">=10.18.1". Got "10.17.0"

# UPdate node using NPM
npm cache clean -f
npm install -g n
sudo n stable
node example.js; xdg-open example.png
```

* Add debugger to your case

## Issues

```
# Install all Debin dependencies
sudo apt install ca-certificates fonts-liberation gconf-service libappindicator1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm-dev libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils
```

```
No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux/suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.

const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
```

```js
const text = await page.$eval(cssSelector, (element) => {
  return element.textContent;
});

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page    = await browser.newPage();

  // Wait until page has loaded
  await page.goto('https://www.instagram.com/accounts/login/', {
    waitUntil: 'networkidle0'
  });

  // Wait for log in form
  await Promise.all([
    page.waitForSelector('[name="username"]'),
    page.waitForSelector('[name="password"]'),
    page.waitForSelector('[name="submit"]')
  ]);

  // Enter username and password
  await page.type('[name="username"]', 'username');
  await page.type('[name="password"]', 'password');

  // Submit log in credentials and wait for navigation
  await Promise.all([
    page.click('[type="submit"]'),
    page.waitForNavigation({
      waitUntil: 'networkidle0'
    })
  ]);

  // Download PDF
  await page.pdf({
    path: 'page.pdf',
    format: 'A4'
  });

  await browser.close();
})();

await page.evaluate(async () => {
  await new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const button = document.querySelector('main ul button');
      if (button !== null) {
        button.click();
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
});


```

## Locators

* class names looks funky so we canot rely on them

## Resources

* https://try-puppeteer.appspot.com/
* https://stackoverflow.com/questions/53200857/puppeteer-node-js-to-click-a-button-as-long-as-it-exists-and-when-it-no-lon
* https://stackoverflow.com/questions/46399299/debug-puppeteer
* https://github.com/puppeteer/puppeteer#debugging-tips

