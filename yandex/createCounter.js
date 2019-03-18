async function createCounter(page, domain, config) {
        await page.goto('https://metrika.yandex.ru/add');
        await page.waitFor('form');
        await page.type('.form-layout__rows > :nth-child(1) input', domain, {delay: config.typingDelay});
        await page.type('.form-layout__rows > :nth-child(2) input', domain, {delay: config.typingDelay});
        try {
            await page.click('.metrika-app__close')
        } catch(e) {
            // await console.log('no popup with adv');
        }
        await page.click('.counter-edit__webvisor-tumbler button');
        await page.select('.select__control', 'Europe/London');
        await page.click('.counter-edit__agreement-checkbox .checkbox__control');
        await page.click('.counter-edit__counter-buttons .button2');
        await page.waitFor(2000);
        try {
            await page.click('.counter-edit-code__code-container');
            await console.log('\nYandex counter created successful.');
            const regxp = /(\d{5,}\?)/;
            await console.log(`${domain} = ${regxp.exec(page.url())[0].slice(0, -1)}`);
        } catch(e) {
            await console.log('\nError! \nYandex counter already exists!\n');
        }
}

module.exports = createCounter;