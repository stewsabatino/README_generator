// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// require the generateMarkdown file 
const generateMarkdown = require('./utils/generateMarkdown')
// array of questions for user input
const questions = [
    {
        message: "What is the title of your app?",
        name: "title"
    }, {
        message:"What was your motivation?",
        name: "motivation"
    },{
        message: "Why did you build this project?",
        name: "build"
    }, {
        message: "What problem does it solve?",
        name: "problem"
    }, {
        message: "What did you learn?",
        name: "learn"
    }, {
        message: "What are the steps required to install your project?",
        name: "installation"
    }, {
        message: "How do you use this project?",
        name: "usage"
    }, {
        message: "How should people contribute to this project?",
        name: "contribution"
    }, {
        message: "How do you test this project?",
        name: "testing"
    }, {
        type: "list",
        message: "Do you want a license?",
        choices: ["Apache 2.0", "IBM", "MIT", "Mozilla"],
        name: "license"
    }, {
        message: "Enter your Github username",
        name: "github"
    }, {
        message: "Enter your email address for contact",
        name: "email"
    }
];



// function to write README file using fileName and data as arguments
function writeToFile(fileName, data) {
    // makes file, if error occurs than console.log the error
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Success! A new README has been generated")
    })

}

// function to initialize app / ask series of questions / run generateMarkdown function
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile("README.md", generateMarkdown(data))
})

}

// Function call to initialize app
init();
