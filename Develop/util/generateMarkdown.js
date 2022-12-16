// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.Username}/${data.Title}

  #${data.Description}

  #Table of Contents 
  *[Installation](#installation)
  *[Usage](#usage)
  *[Credits](#credits)
  *[License](#license)
  *[Badges](#badges)
  *[Features](#features)
  *[Contribute](#contribute)
  *[Tests](#tests)

  #Installation
  The following must be installed to run the application: 

  #Usage
  To use this app: ${data.Usage}
 
  #Credits 
  Collaborators: ${data.Credits}

  #License 
  Copyright permission granted under: ${data.License}
 
  #Badges
   Badges: ${data.Badges} 
   
  #Features
  List of features: ${data.Features}
  
  #Contribute 
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

  #Tests 
  Required tests: ${data.Tests}

  `;
}

module.exports = generateMarkdown;



