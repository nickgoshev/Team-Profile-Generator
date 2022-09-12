const Employee = require("./Employee");
class Manager extends Employee {
    constructor(info){
        super(info.name, info.id, info.email)
        this.role = info.role;
        this.officeNumber=info.officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return this.role;
    }


}
module.exports = Manager;