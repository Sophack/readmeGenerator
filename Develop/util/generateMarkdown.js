// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license !="None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let licenseLink;

  // select correct license link for the selected license
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license != "None") {
    licenseSect += "## License\n"
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSect;
}

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



