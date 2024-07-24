const { writeFile } = require ('fs');
const inquirer = require("inquirer");
const { getQuestions } = require("./questions")
const { generateMarkdown } = require("./markdown") 


async function start(){
  const questions = getQuestions();
  
  const responses = await inquirer.prompt (questions)

  writeFile("README.md", generateMarkdown( responses), (err) => {
    if( err ){
      console.error("There was an error writing the file.")
    } else {
      console.log("File written successfully!")
    }
  })
}

start();