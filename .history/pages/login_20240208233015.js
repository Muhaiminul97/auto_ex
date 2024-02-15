const { test, expect } = require('@playwright/test');

class logInView extends base {
  constructor (page) {
    this.page = page
    this.loginBtn =
      '//header/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[4]/a[1]'
  }
  async verifyLogIn () {
    await this.page.click(this.loginBtn);
  }
}
module.exports = {logInView}