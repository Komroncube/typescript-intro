interface IPerson {
    name:string,
}
class PersonClass implements IPerson {
    name:string;
    private _age:number
    
    
    public static RetirementAge:number = 65
    /**
     *
     */
    constructor(userName:string) {
        this.name = userName;
    }
    public get age() {
        return this._age
    }
    public set age(value:number) {
        if(value<0 || value>140)
        {
            console.log('Wrong value');
        }
        else{
            this._age = value
        }
    }
    print():void {
        console.log(`Name: ${this.name}`);
    }
}
class EmployeeClass extends PersonClass{
    company:string;
    /**
     *
     */
    constructor(username:string, company: string) {
        super(username);
        this.company = company
    }
    print(): void {
        console.log(`Hello I'm ${this.name}`);
    }
    work():void{
        console.log(`${this.name} works in ${this.company}`);
    }
    static calculateYears(age:number):number{
        return super.RetirementAge - age
    }
}
let jerry: EmployeeClass = new EmployeeClass("Bob", "Google")
jerry.work()
jerry.age = 32
let ann: PersonClass = new EmployeeClass("Ann", "Microsoft")
ann.print();

abstract class Figure {
    abstract getArea():void
}
class Rectangle extends Figure
{
    constructor(public width:number, public height: number) {
        super();
    }
    getArea(): void {
        let square = this.width* this.height
        console.log("area = ", square);
    } 
}
    
let rect:Figure = new Rectangle(32, 45)
rect.getArea()

interface PersonInfo {
    (name: string, surname: string):void;
    fullName: string;
    password: string;
    authenticate(): void;
}
 
function personBuilder(): PersonInfo {
 
    let person = <PersonInfo>function (name: string, surname: string): void{
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