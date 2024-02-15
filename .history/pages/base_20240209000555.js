class base {
    constructor(page) {
      this.page = page;
    }
  
    async BaseUrl(url) {
        await page.goto('https://automationexercise.com/');
    }
  }
  
  module.exports = {base};
  