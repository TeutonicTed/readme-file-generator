

function generateMarkdown (responses){

    const markdown = `

# ${responses.title} | ${responses.license}

${responses.description}

## Table of Contents

- [${responses.TOC1}](#${responses.TOC1})
- [${responses.TOC2}](#${responses.TOC2})  
- [${responses.TOC3}](#${responses.TOC3}) 
- [${responses.TOC4}](#${responses.TOC4})
- [${responses.TOC5}](#${responses.TOC5})  
- [${responses.TOC6}](#${responses.TOC6}) 

## [Installation](#table-of-contents)
${responses.installation} 

## [Usage](#table-of-contents)
${responses.usage} 

## [License](#table-of-contents)

Click below for more info on the license:

${responses.license}

## [Tests](#table-of-contents)
${responses.tests} 

## [Contributors](#table-of-contents)
${responses.contributors}

## [Questions](#table-of-contents)

If you have any questions regarding this application, you can reach me at the following links:


### Contact
[GitHub](${responses.GitHub})

${responses.Email}
   `
    return markdown;
}


module.exports ={
    generateMarkdown
}
