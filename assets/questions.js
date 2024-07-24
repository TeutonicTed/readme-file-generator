

function getQuestions(){
  const project = {
      licenseChoices:[
          {id: "Apache", badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"},
            
          {id: "Boost", badge: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"}, 

          {id: "Creative-Commons", badge: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"},

          {id: "Eclipse", badge: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"}, 
          
          {id: "GNU GPI-3", badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"}
      ],  
    }; 
  const licenseId = project.licenseChoices.id
  
  const licenseImg = project.licenseChoices.map(({ id, badge }) => ({
    name: id,
    value: badge
  }));

    return [
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
      },
      {
        type: "input",
        message: "Give us a brief description of your project?",
        name: "description"
      },
      {
        type: "list",
        message: "Select your table of contents?",
        name: "TOC1",
        choices: [
          "installation",
          "usage",
          "license",
          "tests",
          "contributors",
          "questions"
      ]
      },
      {
        type: "list",
        message: "List out your table of contents?",
        name: "TOC2",
        choices: [
          "installation",
          "usage",
          "license",
          "tests",
          "contributors",
          "questions"
      ]
      },
      {
        type: "list",
        message: "List out your table of contents?",
        name: "TOC3",
        choices: [
          "installation",
          "usage",
          "license",
          "tests",
          "contributors",
          "questions"
      ]
      },
      {
        type: "list",
        message: "List out your table of contents?",
        name: "TOC4",
        choices: [
          "installation",
          "usage",
          "license",
          "tests",
          "contributors",
          "questions"
      ]
      },
      {
        type: "list",
        message: "List out your table of contents?",
        name: "TOC5",
        choices: [
          "installation",
          "usage",
          "license",
          "tests",
          "contributors",
          "questions"
      ]
      },
      {
        type: "list",
        message: "List out your table of contents?",
        name: "TOC6",
        choices: [
          "installation",
          "usage",
          "license",
          "tests",
          "contributors",
          "questions"
      ]
      },
      {
          type: "input",
          message: "What are your installation instructions?",
          name: "installation"
        },
      {
          type: "input",
          message: "How would a user go about using your application?",
          name: "usage"
        },
    {
        type: "list",
        message: "Which license did you use?",
        name: "license",
        choices: licenseImg
    },
    {
        type: "input",
        message: "How many tests did you run for this project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What contributor guidelines would you like to set?",
        name: "contributors"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email"
    },
  ]
}
  
  module.exports = {
    getQuestions
    }