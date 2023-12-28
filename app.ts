class User{
    public name : string;
    age:number = 32;
    constructor(_name:string){
          
        this.name = _name;
    }
}
const tom : User = new User("Том");
// const header = document.getElementById("header");
// header!.innerHTML = "Привет " + tom.name + `. Тебе ${tom.age} лет`;


// const newHeader = document.getElementById("header") as HTMLElement
// const anotherHeader = <HTMLElement>document.getElementById("header")
// newHeader.innerHTML = 'Blackpink'
var x:number|string = 40;
console.log(x);
x = "hello"
{
    x="what is your name?"
    console.log(x);
}
x='Michele'
console.log(x);


const num : bigint = 100n;
let someAny :any =32;
console.log(typeof someAny);
someAny = "jordan"
console.log(typeof someAny);
someAny = [3,3,2]
console.log(someAny);


let someArr : any[];
someArr = [2,3,4]
console.log(someArr);
someArr = ["bob", "shaun", 'felix']
console.log(someArr);


const numbers: readonly string[] = ['one', 'two', ...someArr]
console.log(numbers);
const [first, second, ,fourth, ...rest] = numbers

console.log(first);
console.log(second);
console.log(fourth);
console.log(rest);
// console.log(tom.name);

let catUser: [string, number] = ["Tom", 32];
for (const prop of catUser){
    console.log(prop);
}

let math:[string, ...number[], number[], string, boolean[]]
let marks: number[] = [3,2,4]
let grades: number[] = [3,4,5,43,4,5,5,5,5]
let bools : boolean[] = [true]
math = ["Math", ...marks, grades, "algebra", bools]