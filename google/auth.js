async function auth (page, config) {
    await page.goto('https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F%3Fgws_rd%3Dssl&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    await page.waitFor('#identifierId');
    await page.type('#identifierId', config.email, {delay: config.typingDelay});
    await page.click('#identifierNext');
    await page.waitFor(1000);
    await page.type('#password input', config.password, {delay: config.typingDelay});
    await page.click('#passwordNext');
    await page.waitFor('#searchform');
}

module.exports = auth;