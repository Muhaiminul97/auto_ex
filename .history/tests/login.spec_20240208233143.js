// @ts-check
const { test, expect } = require('@playwright/test');
const {basePage} = require('../pages/base')
const {logInView} = require('../pages/login')

test('verify login url', async ({page}) => {
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage()
        let loginPage = new logInView(page)
        await loginPage.goToBase('test.com');

    })

})

