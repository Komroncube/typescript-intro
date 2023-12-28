let person = { name: "Tom", age: 23 };
person = { name: "boy", age: 32 };
function printUser(user) {
    if ('age' in user) {
        console.log(user.name);
        console.log(user.age);
    }
    else {
        console.log(user.name);
    }
}
let bob = { name: "Faqat ism", isMarried: true };
function defaultUser() {
    return { name: "Tom", age: 43 };
}
let defUser = defaultUser();
function printDefaultUser({ name, age = 32 }) {
    console.log(name);
    console.log(age);
}
let jason = { name: "Tom", age: 36 };
let bill = { name: "Bob", age: 41 };
function getPerson() {
    return { name: "Michele", age: 32 };
}
const emp = { name: "Susa", age: 32, company: "Microsoft" };
//# sourceMappingURL=objects.js.map