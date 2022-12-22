const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseURl : "https://parabank.parasoft.com/parabank/index.htm",
    specPattern : "cypress/support/e2e",
    supportFile : false
  },
  env: {
    username : "",
    password : ""
  }
})