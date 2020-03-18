# coding_challenge_III


## Overview
- Project utilizes webdriverio and cucumber for BDD
- Project is built using pageobjects and most of the parameters (firstname, lastname etc.) are configurable from feature file
- Project is using wdio runner. You can find more info on wdio runner [here](https://webdriver.io/docs/clioptions.html)
- Project starts selenium server from config , so we dont have to start manually.
- location of feature file - /src/features/
- location of cucumber steps - /src/steps
- location of pageobjects - /src/support/pageobjects/

## Prerequisites
- Node js should be available. You can Install `node.js` from [here](https://nodejs.org/en/download/)  . 
- Verify node and npm is available on mac terminal by running `node -v` and `npm -v` . If not , you can load by this command
`export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"                        
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
Read more about downloading and installing node and npm  [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Java jdk should be installed. You can install java jdk from [here](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html)  . You can check jdk install by `java -version` . Jdk is required to run selenium server
- Install chrome browser


## Running project
- clone/download  this repository
-  On mac terminal go to the folder where `package.json` reside and run `npm install` to download all dependencies. You can read more about dependencies [here](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
- On terminal go to folder where `wdio.conf.js` reside (which is same folder as `package.json`) and run below command
- Command to run project is `./node_modules/.bin/wdio wdio.conf.js`

## Result
 When everything is run and setup correctly , all steps will pass and on terminal you will see something similar as shown in  `all-passed-screenshot` file in repository . A demo video of execution can be downloaded from [here](https://drive.google.com/open?id=16_9pPzRwu6CeYf8Q9eLWkwMEH_iYFGeM)
