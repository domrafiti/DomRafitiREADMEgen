// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');
const fs = require('fs');
let userResponse = [];


// TODO: Create an array of questions for user input
/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
{type: '', message: '', name: '',},*/
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
            console.log(answers);
            const markdown = generateMD(answers);
            console.log(markdown);
            writeToFile("Test.MD", markdown);
        });
}

// Function call to initialize app
init(questions);
