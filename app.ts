class User{
    name : string;
    constructor(_name:string){
          
        this.name = _name;
    }
}
const tom : User = new User("Том");
// const header = document.getElementById("header");
// header.innerHTML = "Привет " + tom.name;
console.log(tom.name);