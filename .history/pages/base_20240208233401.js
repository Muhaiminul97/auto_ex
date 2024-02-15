const { test, expect } = require('@playwright/test');

class basePage {
  constructor (page) {
    this.page = page
  }
  async goToBaseUrl(url) {
    await this.page.goto(url)
  }
}

module.exports = {basePage}