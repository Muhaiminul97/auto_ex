// @ts-check
const {test, expect} = require('@playwright/test');
const {base} = require('../pages/base')
const {logInView} = require('../pages/login')

test.describe('testing skill', () => {

    let loginPage
    let page
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage()
        await page.pause();
        loginPage = new logInView(page);
        await loginPage.BaseUrl('https://automationexercise.com/');
    })

    test('verify login',async () => {
        await loginPage.verifyLogIn();
    })

})

