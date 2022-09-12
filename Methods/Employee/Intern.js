const Employee = require("./Employee");

class Intern extends Employee {
    constructor(info){
        super(info.name, info.id, info.email)
        this.role = info.role;
        this.school=info.school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return this.role;
    }


}
module.exports = Intern;