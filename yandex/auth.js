async function auth (page, config) {
    await page.goto('https://passport.yandex.ru/auth/list?origin=metrica&retpath=https%3A%2F%2Fmetrika.yandex.ru%2Flist');
    await page.waitFor('form');
    await page.type('#passp-field-login', config.email, {delay: config.typingDelay});
    await page.click('.passp-button .button2');
    await page.waitFor('#passp-field-passwd');
    await page.type('#passp-field-passwd', config.password, {delay: config.typingDelay});
    await page.click('.passp-sign-in-button .button2');
    await page.waitFor(500);
    try {
        await page.click('.passp-enter-email-form .button2_theme_normal');
    } catch (e) {
        // console.log('no popup with additional email');
    }
    await page.waitFor('.counters-list__head');
}

module.exports = auth;