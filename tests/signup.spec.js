// @ts-check
const {test, expect} = require('@playwright/test');
const {base} = require('../pages/base')
const {signUpView} = require('../pages/signup')
const testData = JSON.parse(JSON.stringify(require('../config/users.json')));

test.describe.serial('testing skill', () => {

    let signUpPage
    let page
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage()
        await page.pause();
        signUpPage = new signUpView(page);
        await signUpPage.BaseUrl('https://automationexercise.com/');
    })

    test('verify signup', async () => {
        try {
            // Read parameters from the JSON file

            await signUpPage.verifySignUp();
            const dynamicPart = Date.now();
            await signUpPage.verifySignUpJourney(testData.name, `${testData.email.split('@')[0]}_${dynamicPart}@${testData.email.split('@')[1]}`);
        } catch (e) {
            console.error("Error occurred:", e);
        }
    })

})

