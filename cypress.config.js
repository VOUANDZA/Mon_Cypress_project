const { defineConfig } = require("cypress");

module.exports = defineConfig({

reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },

e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },


});
