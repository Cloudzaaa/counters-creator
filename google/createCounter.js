async function createCounter(page, domain, config) {
    await page.goto(`https://analytics.google.com/analytics/web/?authuser=1#/${config.countersGroup}/admin/property/create`);
    await page.waitFor('input[name="name"]');
    let currentAmountofLandings = await page.$eval('.property-quota-summary > div', el => el.textContent.match(/50/g).length);
    if (await currentAmountofLandings === 2) {
        console.log(`Достигнуто максимальное количество лендингов на аккаунте. Нужно создать новый и указать countersGroup в конфиге`)
        //здесь нужен код создания новой группы счетчиков
    } else {
        await page.type('input[name="name"]', domain, {delay: config.typingDelay});
        await page.type('ga-url-selector input', domain, {delay: config.typingDelay});
        await page.$eval('ga-time-zone-picker[name="timezone"] li:nth-child(172)', el => el.click());
        await page.click('button.btn.action');
        await page.waitFor(7000);
        let counter = await page.$eval('#galaxyIframe', frame => {
            return frame.contentWindow.document.body.querySelector('div[data-guidedhelpid="trackingheader-trackingid"]').textContent;
        });
        await console.log('\nGoogle counter created successful.');
        await console.log(`${config.domains[0]} = ${counter}`);
    }
}

module.exports = createCounter;