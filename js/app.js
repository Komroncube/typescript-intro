class User {
    name;
    age = 32;
    constructor(_name) {
        this.name = _name;
    }
}
const tom = new User("Том");
const header = document.getElementById("header");
header.innerHTML = "Привет " + tom.name + `. Тебе ${tom.age} лет`;
var x = 40;
console.log(x);
x = "hello";
{
    x = "what is your name?";
    console.log(x);
}
x = 'Michele';
console.log(x);
const num = 100n;
let someAny = 32;
console.log(typeof someAny);
someAny = "jordan";
console.log(typeof someAny);
someAny = [3, 3, 2];
console.log(someAny);
let someArr;
someArr = [2, 3, 4];
console.log(someArr);
someArr = ["bob", "shaun", 'felix'];
console.log(someArr);
//# sourceMappingURL=app.js.map