### Red points project
 
## Accessing the project:

The project is using the cypress framework for testing, and was created in Visual Studio Code IDE. 

Requirements before running the project: 
 - install npm
 - install node.js
 - install cypress
 - browsers (chrome, firefox) (optional*)


After having installed all these you can run the tests by using the following commands:

1. To launch the tests with a specific browser I've added npm scripts that can be used as a shortcut, added in package.json file*:

    npm run cy-run-chrome
    npm run cy-run-firefox

    * in order to be able to use the upper commands, you need to have the browsers installed.
    * also, to have these commands running, you will need to do an npm install.
 
2. To launch all test you can use only:
    
    npx cypress run

3. To launch the cypress enviroment and try to run each suite of test you can use:
    
    npx cypress open 


## Project description:

This is my first cypress project from scratch. I've first started doing the manually exploratory tests, then continuing write the test cases and automate them. 

I've created tests for each requirement, that can be run individially, as well as together.
Also, I've created 2 classes inside page objects to avoid duplication. One is for action and the other one for elements of the page.      
I've also test on multiple browsers.
