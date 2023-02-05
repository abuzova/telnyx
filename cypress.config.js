const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here     
    },
    viewportWidth: 2048,
    viewportHeight: 1536,
  },
});
