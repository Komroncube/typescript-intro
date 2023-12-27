function addAnything(a, b) {
    return a + b;
}
function sayHello(name, lastName = "Tompson") {
    if (lastName)
        console.log(`Hello ${name} ${lastName}`);
    else {
        console.log(`Hello ${name}`);
    }
}
let operation;
let nullnum = 32;
function mathOperation(a, b, oper) {
    console.log(oper(a, b));
}
function simpleMathOperatoin(a, b, oper) {
    console.log(oper(a, b));
}
function printSentence(words) {
    if (typeof words === "string") {
        console.log(words);
    }
    else {
        console.log(words.join(" "));
    }
}
printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");
const file = document.getElementById("demo");
file.innerHTML = 'hello world';
//# sourceMappingURL=studyFunctions.js.map