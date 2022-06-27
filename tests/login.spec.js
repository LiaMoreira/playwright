const {test, expect } = require('@playwright/test');


test('signup', async ({ page }) => {
    await page.goto('https://www.phptravels.net/');
    await page.locator(':nth-match(:text("Signup"), 3)').click();

    await expect(page).toHaveURL('https://www.phptravels.net/signup');

    await page.fill('[name=first_name]', 'Lia');
    await page.fill('[name=last_name]', 'Moreira');
    await page.fill('[name=phone]', '+351919191919');
    await page.fill('[name=email]', 'lia.moreira07@gmail.com');
    await page.fill('[name=password]', '123456');

    await page.click('.btn.btn-default.btn-lg.btn-block.effect.ladda-button.waves-effect');
    
});
test('login', async ({ page }) => {

    await page.goto('https://www.phptravels.net/');
    await page.click('.theme-btn-transparent');
    
    await page.fill('[name=email]', 'lia.moreira07@gmail.com');
    await page.fill('[name=password]','123456');
    await page.click('.btn-lg');

    await expect(page.locator('h2 > span')).toHaveText('Lia');

});