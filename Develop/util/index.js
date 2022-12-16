// TODO: Include packages needed for this application

const inquirer = require("inquirer"); 
const fs = require('fs');
const util = require("util");
const generatorMarkdown = require('./util/generatorMarkdown');


// TODO: Create an array of questions for user input

const questions = [{
        type: "input",
        message: "What is the title of the project?", 
        name: "Project Title" 
},{
    type: "input",
        message: "What is your Github username?", 
        name: "Username"        
}, {
    type: "input",
        message: "What is the project about? Please explain your motivation & reasoning", 
        name: "Description" 
}, {
    type: "input",
        message: "Do you need a table of contents?", 
        name: "Table of contents" 
}, {
    type: "input",
        message: "What are the steps required to install your project?", 
        name: "Installation" 
}, {
    type: "input",
        message: "What are the instructions and examples for usage?", 
        name: "Usage" 
        
}, {
    type: "input",
        message: "Who are some collaborators?", 
        name: "Credits" 
    
        
}, {
    type: "list",
        message: "What licenses are covered?", 
        name: "License" ,  
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
        
},{
    type: "input",
        message: "What badges do you have?", 
        name: "Badges" 
        
},{
    type: "input",
        message: "What features does your project have?", 
        name: "Features" 
    
        
},{
    type: "input",
        message: "What tests will you require?", 
        name: "Tests"        
}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if(err){
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)

    })
}

// Function call to initialize app
init();
