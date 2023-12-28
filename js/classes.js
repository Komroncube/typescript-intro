class PersonClass {
    name;
    _age;
    static RetirementAge = 65;
    constructor(userName) {
        this.name = userName;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0 || value > 140) {
            console.log('Wrong value');
        }
        else {
            this._age = value;
        }
    }
    print() {
        console.log(`Name: ${this.name}`);
    }
}
class EmployeeClass extends PersonClass {
    company;
    constructor(username, company) {
        super(username);
        this.company = company;
    }
    print() {
        console.log(`Hello I'm ${this.name}`);
    }
    work() {
        console.log(`${this.name} works in ${this.company}`);
    }
    static calculateYears(age) {
        return super.RetirementAge - age;
    }
}
let jerry = new EmployeeClass("Bob", "Google");
jerry.work();
jerry.age = 32;
let ann = new EmployeeClass("Ann", "Microsoft");
ann.print();
class Figure {
}
class Rectangle extends Figure {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        let square = this.width * this.height;
        console.log("area = ", square);
    }
}
let rect = new Rectangle(32, 45);
rect.getArea();
function personBuilder() {
    let person = function (name, surname) {
        person.fullName = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(person.fullName + " входит в систему с паролем " + person.password);
    };
    return person;
}
let ferb = personBuilder();
ferb("Tom", "Simpson");
ferb.password = "qwerty";
ferb.authenticate();
//# sourceMappingURL=classes.js.map