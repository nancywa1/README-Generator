// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache license') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'The GPL License') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'N/A') {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === 'Apache license') {
//     return 'https://opensource.org/licenses/Apache-2.0'
//   }
//   if (license === 'BSD 3') {
//     return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
//   }
//   if (license === 'The MIT License') {
//     return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//   }
//   if (license === 'The GPL License') {
//     return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
//   }
//   if (license === 'N/A') {
//     return ""
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 'Apache license') {
    return 'This project is licensed under the Apache License, Version 20'
  }
  if (license === 'BSD 3') {
    return 'This project is licensed under the BSD 3'
  }
  if (license === 'The MIT License') {
    return 'This project is licensed under the MIT License'
  }
  if (license === 'The GPL License') {
    return 'This project is licensed under the GPL License'
  }
  if (license === 'N/A') {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  return `
  # ${data.name}
  ---
  ${renderLicenseBadge(data.license)}

## Description

  ${data.description}

## Table of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

To intall necessy dependencies, run following command:

${data.installation}

## Usage
${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
"To run tests, run the following command:

${data.tests}

## Question

 If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find me of my work at <a href='https://github.com/nancywa1'>${data.github}<a>.
`;
}

module.exports = generateMarkdown;
