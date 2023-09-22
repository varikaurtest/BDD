const cucumber = require('cypress-cucumber-preprocessor').default //BDD

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    "cypress-cucumber-preprocessor": {
      "stepDefinitions": "cypress/e2e/**/*.js",
      "filterSpecs": true,
      "omitFiltered": true,
      "json": {
        "enabled": true,
        "formatter": "cucumber-json-formatter",
        "output": "/cucumber-report.json"
     }
    },
    //pageLoadTimeout: 10000,//wait for 7 seconds
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber()) //BDD, to tell machine to choose cucmber files for eexdcutio =n as by defaut .cy are executed
    },
    specPattern: "cypress/e2e/**/*.feature", //BDD, if its .feature file, then choose it for executution
   },  
});
