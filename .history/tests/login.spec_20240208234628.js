// @ts-check
const { test, expect } = require('@playwright/test');
const {basePage} = require('../pages/base')
const {logInView} = require('../pages/login')

test.describe('',()=>{

let loginPage
let page
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage()
    loginPage = new logInView(page)
    await loginPage.goToBaseUrl('www.google.com')

    })

})

