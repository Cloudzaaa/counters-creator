const puppeteer = require('puppeteer');
const config = require('./config');
const googleAuth = require('./google/auth');
const yandexAuth = require('./yandex/auth');
const googleCreateCounter = require('./google/createCounter');
const yandexCreateCounter = require('./yandex/createCounter');

const browser = puppeteer.launch({
    headless: false
}).then(
    async browser => {
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 1100 });

        if (config.google.domains.length > 0) {
            await googleAuth(page, config.google);
            for (let domain of config.google.domains) {
                await googleCreateCounter(page, domain, config.google);
            }
        }

        if (config.yandex.domains.length > 0) {
            await yandexAuth(page, config.yandex);
            for (let domain of config.yandex.domains) {
                await yandexCreateCounter(page, domain, config.yandex)
            }
        }

        await browser.close();
    }
);