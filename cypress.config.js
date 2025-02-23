const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseURL: "https://guest:welcome2qauto@qauto.forstudy.space",
    baseUrl: "https://qauto.forstudy.space",
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
  },
  env: {
    LOGIN: "test1739061026459@test.io",
    PASSWORD: "Very1strong",
  },
  reporter: "cypress-mochawesome-reporter",
  setupNodeEvents(on, config) {
    require("cypress-mochawesome-reporter/plugins"(on));
  },
});
