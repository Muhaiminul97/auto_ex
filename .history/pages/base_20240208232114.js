const { test, expect } = require('@playwright/test');

class basePage {
  constructor (page) {
    this.page = page
  }
  async goToBase (url) {
    await this.page.goto(url)
  }
}

module.exports = {basePage}