function addAnything(a, b){
    return a+b
}
function sayHello(name:string, lastName: string = "Tompson")
{
    if(lastName)
        console.log(`Hello ${name} ${lastName}`);
    else
    {
        console.log(`Hello ${name}`)
    }
}

// console.log(addAnything(1,2));
// console.log(addAnything("1", "2"));
// sayHello("bob", "philips")
let operation : (a:number, b:number) => number;
// operation = addAnything;
// console.log(operation(2,4));
type Operation = (a:number, b:number) => number


//creating own types
type nullabel = number|null;
let nullnum :nullabel = 32

function mathOperation(a:number, b:number, oper : (a:number, b:number) => number) : void {
    console.log(oper(a,b));
}
function simpleMathOperatoin(a:number, b:number, oper:Operation) : void{
    console.log(oper(a,b));
}
// mathOperation(2,555, addAnything)
// simpleMathOperatoin(48,484, addAnything)

function printSentence(words: string[]|string){
    // если words - строка
    if (typeof words === "string") {
      console.log(words);
    } else {
      // Если words - массив string[]
      console.log(words.join(" "));
    }
}
printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");


const file : HTMLElement|null = document.getElementById("demo")
file!.innerHTML='hello world'