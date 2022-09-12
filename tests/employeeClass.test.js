const Employee = require("../Methods/Employee/Employee")


const Manager = require ('../Methods/Employee/Manager')
const Engineer = require ('../Methods/Employee/Engineer')
const Intern = require ('../Methods/Employee/Intern')

describe("Employee", ()=>{
    const employee = new Employee("james","42","james@mail.com");

    test(".getname function", ()=>{
        expect(employee.getName()).toBe("james");
    })
    test(".getId function", ()=>{
        expect(employee.getId()).toBe("42");
    })
    test(".getEmail function", ()=>{
        expect(employee.getEmail()).toBe("james@mail.com");
    })
    test(".getRole function", ()=>{
        expect(employee.getRole()).toBe("employee");
    })
}
)
describe("Manager", ()=>{
    const info ={
        role: 'manager',
        officeNumber: '51'
    }
    const employee = new Manager(info);

    test(".getOfficeNumber function", ()=>{
        expect(employee.getOfficeNumber()).toBe("51");
    })
    test(".getRole function", ()=>{
        expect(employee.getRole()).toBe("manager");
    })
}
)
describe("Engineer", ()=>{
    const info ={
        role: 'engineer',
        github: 'jamescode'
    }
    const employee = new Engineer(info);

    test(".getGithub function", ()=>{
        expect(employee.getGithub()).toBe("jamescode");
    })
    test(".getRole function", ()=>{
        expect(employee.getRole()).toBe("engineer");
    })
}
)

describe("Intern", ()=>{
    const info ={
        role: 'intern',
        school: 'School'
    }
        
    const employee = new Intern(info);

    test(".getSchool function", ()=>{
        expect(employee.getSchool()).toBe("School");
    })
    test(".getRole function", ()=>{
        expect(employee.getRole()).toBe("intern");
    })
}
)