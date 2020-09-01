// inquirer.prompt(questions);
// start asking questions here with inquirer

function askQuestions() {
    return inquirer.prompt([
{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Please put a description of your project.",
    name: "description"
  },
  {
    type: "input",
    message: "installations to run your project?",
    name: "installation"
  },
  
  {
    type: "list",
    name: "license",
    message: "What kind of license would you like to have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"]
  },
  {
    type: "input",
    message: "Including yourself, please list out all contributors",
    name: "contributer"
  },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "github"
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "email"
  },
])


// once the answers come back, writeToFile
// writeToFile("README.md", data);
function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
      if (err) {
        throw err;
      }
      console.log("You have successfully written your README file");
    });
  };
