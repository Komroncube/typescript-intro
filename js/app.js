class User {
    name;
    age = 32;
    constructor(_name) {
        this.name = _name;
    }
}
const tom = new User("Том");
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
const numbers = ['one', 'two', ...someArr];
console.log(numbers);
const [first, second, , fourth, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(fourth);
console.log(rest);
let catUser = ["Tom", 32];
for (const prop of catUser) {
    console.log(prop);
}
let math;
let marks = [3, 2, 4];
let grades = [3, 4, 5, 43, 4, 5, 5, 5, 5];
let bools = [true];
math = ["Math", ...marks, grades, "algebra", bools];
let decomp = math[3];
for (let prop of math) {
    console.log(prop);
}
//# sourceMappingURL=app.js.map