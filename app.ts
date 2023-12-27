class User{
    public name : string;
    age:number = 32;
    constructor(_name:string){
          
        this.name = _name;
    }
}
const tom : User = new User("Том");
const header = document.getElementById("header");
header!.innerHTML = "Привет " + tom.name + `. Тебе ${tom.age} лет`;
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


// console.log(tom.name);