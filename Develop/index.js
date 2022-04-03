// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

const promptUserInput = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is GitHub username?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the project name?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a description of your project'
            },
            {
                type: 'list',
                name: 'license',
                message: 'What license did you used?',
                choices: ['The MIT License', 'The GPL License', 'Apache license', 'BSD 3', 'N/A']
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What command should be run to install dependencies?',
                default: 'npm i'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command should be run to run test?',
                default: 'npm test'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What does the user need to know about using the repo?'
            },

            {
                type: 'input',
                name: 'contributing',
                message: 'What does the user need to know about contributing to the repo?'
            }


        ])
        .then((answers) => {
            writeToFile("preview", answers)
        })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const generateReadme = generateMarkdown(data)
    // console.log(generateReadme);
    fs.writeFile(`./${fileName}.md`, generateReadme, err => {
        console.log('Successfully write file')
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUserInput();
}

// Function call to initialize app
init();
