const inquirer = require("inquirer");


//prompt - enter team manager's info
const teamMembers = [{
    message: "Team Manager's Name:",
    name: "Tm Mgr",
    type: "input,"
},
{
    message: "Employee ID:",
    name: "Emp ID",
    type: "input",
},
{
    message: "Email Address:",
    name: "Em Add",
    type: "input",
},
{
    message:"Office Number:",
    name: "Off Num",
    type: "input",
},

//prompt - enter team members:
{
    message: "Please select from option below:",
    name: "tm",
    type: "list",
    choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
},
//need to redirect prompt depending on answer


//prompt - engineer:
{
    message:"Engineer's Name:",
    name: "Eng Nm",
    type: "input",
},
{
    message: "Employee ID:",
    name: "Emp ID",
    type: "input",
},
{
    message: "Email Address:",
    name: "Em Add",
    type: "input",
},
{
    message: "GitHub Username:",
    name: "GH User",
    type: "input",
},
]



// after entering info then list to add to team. options: engineer, intern, finish building team.



//prompt done return to main menu

//Intern Prompt: intern’s name, ID, email, and school

//prompt done return to main menu

//when finished exits application


//generate HTML file 
    //Need to make HTML template for file
    //Need to create css style sheet


//formats input of roster

//click email in HTML opens email program


//populates to field with email


//click Github Username, profile opens in tab
    //need to create standard link convention

