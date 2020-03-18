# coding_challenge_III


## Overview
- Project utilizes webdriverio and cucumber for BDD
- Project is built using pageobjects and most of the parameters (firstname, lastname etc.) are configurable from feature file
- Project is using wdio runner - https://webdriver.io/docs/clioptions.html
- Project starts selenium server from config , so we dont have to start manually.

## Prerequisites
- Install `node.js` from  - https://nodejs.org/en/download/  . 
- verify node and npm is available on mac terminal by running `node -v` and `npm -v` . If not , you can load by this command
`export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
More about downloading and installing node and npm - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- Install java jdk -  https://www.oracle.com/java/technologies/javase-jdk14-downloads.html  . You can check jdk install by `java -version` . Jdk is required to run selenium server
- Install chrome browser


## Running project
- clone/download  this repository
-  On mac terminal go to the folder where `package.json` reside and run `npm install` to download all dependencies. You can read more about dependencies here - https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
- On terminal go to folder where `wdio.conf.js` reside (which is same folder as `package.json`) and run below command
- Command to run project is `./node_modules/.bin/wdio wdio.conf.js`

## Result
 When everything is run and setup correctly , all steps will pass and on terminal you will see something similar as shown in  `all-passed-screenshot` file in repository
