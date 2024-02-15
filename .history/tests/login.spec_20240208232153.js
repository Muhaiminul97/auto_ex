// @ts-check
const { test, expect } = require('@playwright/test');
const {basePage} = require('../pages/base')
const {logInView} = require('../pages/login')

test('verify login url', async ({page}) => {
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage()
        loginPage = new LogIn(page)
        await loginPage.BaseUrl('https://www.demoblaze.com/')
        await loginPage.verifyLogInBTN()
        await loginPage.verifyLogIn('m@mail.com', 'admin')
        await loginPage.verifyLogInBtnClick()

    })

})

