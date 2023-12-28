let person: { name: string; age?: number } = { name: "Tom", age: 23 };
// console.log(person.age);

person = {name:"boy", age:32}
// person = {name : "Bill"}
// if qo'shib qo'ysa bo'ladi
// console.log(person.age);
function printUser(user: {name:string; age?:number})
{
    if('age' in user)
    {
        console.log(user.name);
        console.log(user.age);
    }
    else{
        console.log(user.name);
    }
    
}
// printUser(person)

let bob =  {name: "Faqat ism", isMarried:true}
//printUser(bob)


function defaultUser() : {name: string; age: number} {
    return {name:"Tom", age:43}
}
let defUser = defaultUser()
function printDefaultUser({name,age=32 }: {name:string; age?:number})
{
    console.log(name);
    console.log(age);
}    

type Person = {name:string; age:number;}
let jason : Person = {name: "Tom", age: 36};
let bill: Person = {name: "Bob", age: 41};
function getPerson<T extends Person|number>():T{

    return {name : "Michele", age: 32} as T
}


type Employee = Person & {company:string}
const emp:Employee ={name:"Susa", age:32, company: "Microsoft"}

