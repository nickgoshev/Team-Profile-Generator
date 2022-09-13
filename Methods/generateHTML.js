const createTeam = require('./createTeam.js');
const fs = require('fs');



    function openingHTML(){
      return ` <!DOCTYPE html>
<html lang="en">
    <head>
        <title>My Team</title>
        <meta charset="UTF-8">
        <meta name = "viewport" content="width=decide-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="jumbotron bg-danger">
            <h1 class="p-5 text-center">My Team</h1>
        </header>
        <div class="col-8">
            
            <div id="members" class="row justify-content-around">
            `
    }

    function closingHTML(){
        return`
        </div>
        </body>`
    }

    function employeeSpecific(employee){
        switch (employee.getRole()){
            case "manager":
                return `<p>Office Number: ${employee.getOfficeNumber()}</p></div>`
                break;
            case "engineer":
                return `<p>Github: <a href="https://github.com/${employee.getGithub()}/">${employee.getGithub()}</a> </p></div>`
                break;
            case "intern":
                return `<p>School: ${employee.getSchool()}</p></div>`
                break;
        }

    }

   
function writeToFile (fileName, data){
    var file = fs.createWriteStream(fileName);
    
file.write(openingHTML());

   
    data.forEach(employee=>
        {
            
            file.write(`<div class="col-md-2 border text-center" >
                <p> ${employee.getRole()}</p>
                <p class="border-bottom"> ${employee.getName()} </p>
              <p> Employee ID: ${employee.getId()} </p>
              <p> Email: <a href="https://${employee.getEmail()}/"> ${employee.getEmail()}</a></p>`
              )
            file.write(employeeSpecific(employee));
        })

    file.write(closingHTML());

    file.end();
}
    module.exports = {writeToFile}

