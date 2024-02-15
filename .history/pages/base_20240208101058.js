import { test, check } from '@playwright/test'

class basePage {
  constructor (page) {
    this.page = page
  }
  async goToBase (url) {
    await this.page.goto(url)
  }
}
