const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //viewportWidth: 1600,
    viewportWidth: 2200,
    viewportHeight: 1200,
  },
});
