Step1: npm init
Step2: npm install cypress --save-dev
step3: npm -i -D cypress cypress-cucumber-preprocessor
	   npm install --save-dev cypress-cucumber-preprocessor
step4: npx cypress open	   
step5: Need to add below lines in cypress.config.js
	1st line--
		const cucumber = require('cypress-cucumber-preprocessor').default
	under e2e
		setupNodeEvents(on, config){
		on('file:preprocessor', cucumber())
		},
		specPattern: "cypress/e2e/*.feature",
step6: need to add package.js
	"cypress-cucumber-preprocessor":{
		"nonGlobalStepDefinitions": true,
		"step_definitions": "cypress/e2e/newtours"
		}
step7: create cucumber file in newtours.feature
step8: create folder for step definitions in e2e - newtours
	note file name should be same as feature file name
	
	import {Given, When, Then } from
	"cypress-cucumber-preprocessor/steps"
step9: run and check	

NOte: 
- to run tags from terminal "npx cypress run -e TAGS='@smoke'"
- to run all specs in specific browser "npx cypress run -b 'chrome' --headed"
- to run all the specs in perticular folder "npx cypress run --spec "cypress/e2e/login/**/*" "
- to run a single spec file "npx cypress run --spec "cypress/e2e/tagsDemo.feature""
- to run a single spec file with tags "npx cypress run --spec "cypress/e2e/tagsDemo.feature" -e TAGS='@regression'"

Report generation
-----------------
1. Need the the following in the package.json file
"cypress-cucumber-preprocessor": {
    "cucumberJson": {
      "generate": true,
      "outputFolder": "cypress/cucumber-json",
      "filePrefix": "",
      "fileSuffix": ".cucumber"
    }
  }
 2. Open the test runner or run the tests
 npx cypress run / npx cypress open and execute
 observe the cucumber-json folder and inside that json files for all the tests
 3. npm install multiple-cucumber-html-reporter --save -dev
 4. create a cucumberReport.js inside the cypress folder and paste the below code
 const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json/",
  reportPath: "./cypress/cucumber-report",
 
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
    ],
  },
});

5. npx cypress run 
6. node .\cypress\cucuumberReport.js
7. opne the index.html from cypress\cucumber-report 

report references:
https://www.npmjs.com/package/multiple-cucumber-html-reporter
https://www.npmjs.com/package/cypress-cucumber-preprocessor
https://www.youtube.com/watch?v=agkBpXusXjw&list=PLBw1ubD1J1Ujws5XLs7BGJqQkQVpJtmBJ&index=40
