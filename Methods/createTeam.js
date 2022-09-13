
const createEmployee = require('./createEmployee');
const generateHTML = require( './generateHTML.js');
const inquirer = require('inquirer');


const questions=[
    {
        type: 'list',
        choices:["manager","engineer","intern"],
        message: "what position does the employee hold?",
        name: "role",
    },
    {
        type: 'input',
        message: "what is the employee's name?",
        name: "name",
    },
    {
        type: 'input',
        message: "what is the employee's ID?",
        name: "id",
    },
    {
        type: 'input',
        message: "what is the employee's email?",
        name: "email",
    },
    {
        type: 'input',
        message: "what is the employee's office number?",
        name: "officeNumber",
        when: (answers)=>answers.role === "manager"
    },
    {
        type: 'input',
        message: "what is the employee's Github username?",
        name: "github",
        when: (answers)=>answers.role === "engineer"
    },
    {
        type: 'input',
        message: "what is the employee's school?",
        name: "school",
        when: (answers)=>answers.role === "intern"
    },
    {
        type: 'list',
        choices: ["yes", "no"],
        message: "is there another employee(s)",
        name: "moreEmployees",
    },

]


function employeeInformation(){

    inquirer.prompt(questions).then(answers =>{

    const newEmployee = createEmployee.create(answers);

    team.push(newEmployee);

    if (answers.moreEmployees === "yes"){
        employeeInformation()
    } else{ 
        console.log("All employees added")
        
        generateHTML.writeToFile('index.html', team);

    }
})
}

    
    const team = [];
    employeeInformation();





module.exports = {employeeInformation}