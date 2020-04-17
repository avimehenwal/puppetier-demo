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

## Resources

* https://try-puppeteer.appspot.com/

