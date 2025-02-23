const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
      baseURL: "https://guest:welcome2qauto@qauto2.forstudy.space",
      video: false,
      screenshotOnRunFailure: false,
      chromeWebSecurity: false,
  },
  env: {
    LOGIN:'test66666666@test.io',
    PASSWORD:'StrongPassword1'
  }
});
