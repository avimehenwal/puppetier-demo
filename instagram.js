const puppeteer = require('puppeteer');
const url = 'http://instagram.com';

const instagram = {
  browser: null,
  page: null,

  initialize: async () => {
    instagram.browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    instagram.page = await instagram.browser.newPage();
    await instagram.page.goto(url, {
      waitUntil: 'networkidle2'
    });

  }
}

module.exports = instagram;
