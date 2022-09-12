const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(info){
        super(info.name, info.id, info.email)
        this.role = info.role;
        this.github=info.github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.role;
    }


}
module.exports = Engineer;