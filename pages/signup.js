const { test, expect } = require('@playwright/test');
const {base} = require("./base");

class signUpView extends base {
  constructor (pages) {
    super(pages)
    this.signUpBtn =
      '//header/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[4]/a[1]';
    this.signUpName = '[data-qa="signup-name"]';
    this.signUpMail = '[data-qa="signup-email"]';
  }
  async verifySignUp() {
    await this.page.pause()
    await this.page.click(this.signUpBtn);
  }
  async verifySignUpJourney(username,password){
    await this.page.click(this.signUpName);
    await this.page.fill(this.signUpName,username);
    await this.page.click(this.signUpMail);
    await this.page.fill(this.signUpMail,password);
  }
}
module.exports = {signUpView}