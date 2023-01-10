// TODO: Include packages needed for this application

const inquirer = require('inquirer'); 
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./util/generateMarkdown');
const { table } = require('console');


// TODO: Create an array of questions for user input

const questions = [{
        type: "input",
        message: "What is the title of the project?", 
        name: "Title" 
},{
    type: "input",
        message: "What is your Github username?", 
        name: "Username"        
}, {
        //validate command determines whether user actually answered
    type: "input",
        message: "Please provide a project description", 
        name: "Description",
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            }else{
                console.log("Please provide a project description");
                return false;
            }

        } 

}, {
    type: "list",
        message: "Do you need a table of contents?", 
        name: "Table of contents",
        choices: ['yes', 'no'],
        validate: tableContent = () => {
            if (tableContent){
                return true;
            } else {
                console.log('Please enter either "yes" or "no"')
            }
        }
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
        choices: ['None', 'MIT', 'ISC', 'GPL v3.0', 'Apache 2.0'],
        validate: licenseInput = () => {
            if (licenseInput){
                return true;
        } else{ console.log("Please select an option")
    }}},{

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
//
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);

//passing answer into generate markdown
//file content is the README file 
    var fileName = answer.Title
//in the function data is not defined, 
//answer is an object with both data from generate and user input  
    var fileContent = generateMarkdown(answer);
    writeToFile(fileName, fileContent)
    });
}

// Function call to initialize app
init();

//exporting questions array  
module.exports = questions;