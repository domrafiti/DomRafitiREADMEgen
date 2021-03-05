// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');
const fs = require('fs');

const questions = [
    { type: 'input', message: "What is the title of your Project?", name: 'projectTitle', },
    { type: 'input', message: 'Enter your project description:', name: 'projectDesc', },
    { type: 'input', message: 'Enter installation instructions:', name: 'instalInstr', },
    { type: 'input', message: 'Enter usage information:', name: 'usaageInfo', },
    { type: 'input', message: 'Enter contribution guidelines:', name: 'contribGuide', },
    { type: 'input', message: 'Enter test instructions:', name: 'testInstr', },
    { type: 'list', message: 'Choose a License to include:', choices: ['MIT License', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'], name: 'license', },
    { type: 'input', message: 'Enter your GitHub username:', name: 'gitHubUser', },
    { type: 'input', message: 'Enter your Email Address:', name: 'userEmail', },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt(questions)
        .then(answers => {
            const markdown = generateMD(answers);
            writeToFile("Test.MD", markdown);
        });
}

// Function call to initialize app
init(questions);
