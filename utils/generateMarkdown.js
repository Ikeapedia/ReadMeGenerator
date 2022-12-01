// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  if (license === 'Apache License 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'GNU General Public License v3.0') {
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'MIT License') {
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'BSD 2-Clause Simplified License') {
    licenseBadge = '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
  } else if (license === 'BSD 3-Clause New or Revised License') {
    licenseBadge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else if (license === 'Boost Software License 1.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    licenseBadge = '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)';
  } else if (license === 'GNU Affero General Public License v3.0') {
    licenseBadge = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
  } else if (license === 'GNU General Public License v2.0') {
    licenseBadge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
  } else {
    licenseBadge = '';
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let licenseLink;
  
  if (license === 'Apache License 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GNU General Public License v3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'MIT License') {
    licenseLink = 'https://opensource.org/licenses/MIT';
  } else if (license === 'BSD 2-Clause Simplified License') {
    licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
  } else if (license === 'BSD 3-Clause New or Revised License') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'Boost Software License 1.0') {
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/';
  } else if (license === 'GNU Affero General Public License v3.0') {
    licenseLink = 'https://www.gnu.org/licenses/agpl-3.0';
  } else if (license === 'GNU General Public License v2.0') {
    licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
  } else {
    licenseLink = '';
  }
  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if (license != 'No License') {
    licenseSection += '## License\n';
    licenseSection += 'Go to ' + renderLicenseLink(license) + ' to get more information regarding this license.\n';

  }

  return licenseSection;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const content = ['Description', 'Installation', 'Usage', 'Contribution', 'Tests', 'License', 'Questions'];

  let markdown = '# ' + data.title + ' ' + renderLicenseBadge(data.license) + '\n';

  markdown += '## Table of Contents\n';

  for (i = 0; i < content.length; i++){
    if (!(content[i]==='License' && data.license === 'No License')) {
      markdown += '* [' + content[i] + '](#' + content[i][0].toLowerCase() + content[i].substring(1) + ')\n';
    }
  }

  markdown += '\n';

  markdown += '## ' + content[0] + '\n';
  markdown += data.description + '\n';

  markdown += '## ' + content[1] + '\n';
  markdown += data.installation + '\n';

  markdown += '## ' + content[2] + '\n';
  markdown += data.usage + '\n';

  markdown += '## ' + content[3] + '\n';
  markdown += data.contribution + '\n';

  markdown += '## ' + content[4] + '\n';
  markdown += data.test + '\n';

  markdown += renderLicenseSection(data.license) + '\n';

  markdown += '## ' + content[6] + '\n';
  markdown += 'You can find me here on [GitHub](https://github.com/' + data.github + ')\n';
  markdown += '\n';
  markdown += 'You can reach me via email at ' + data.email + ' with additional questions.\n';


  return markdown;
}

module.exports = generateMarkdown;