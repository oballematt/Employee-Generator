const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const newTeam = []


const managerQuestions = 
[
    {
        type: "input",
        name: "manager",
        message: "What is the manager's name?"

    },
    {
        type: "input",
        name: "idM",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "emailM",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "office",
        message: "What is the manager's office number?"
    }
]

const engineerQuestions = 
[
    {
        type: "input",
        name: "idE",
        message: "What is the engineer's ID?"

    },
    {
        type: "input",
        name: "engineer",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "emailE",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the enginner's github?"
    }
]

const internQuestions = 
[
    {
        type: "input",
        name: "idI",
        message: "What is the intern's ID?"

    },
    {
        type: "input",
        name: "intern",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "emailI",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "Where did the intern attend school?"
    }
]

const teamQuestions = 
[
    {
        type: "list",
        name: "choose",
        message: "Would you like to add a new member to the team?",
        choices:["Engineer", "Intern", "None"]
    }
]

function managerInfo(){
    inquirer.prompt(managerQuestions).then(function(data){
        const manager = new Manager(data.emailM, data.manager, data.idM, data.office)
        newTeam.push(manager)
        teamInfo()
    })
  
}

 function engineerInfo(){
    inquirer.prompt(engineerQuestions).then(function(data){
        const engineer = new Engineer(data.engineer, data.idE, data.emailE, data.github)
        newTeam.push(engineer)
        teamInfo()
    }) 
}