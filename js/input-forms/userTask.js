class AppUser {
    name;
    gender;
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 2] = "female";
})(Gender || (Gender = {}));
const users = [new AppUser("Siroj", 1)];
const user = new AppUser("Malika", 2);
users.push(user);
function getUsers() {
    let list = document.getElementById("userlist");
    const gender = document.getElementById("gender").innerText == 'male' ? 1 : 2;
    const genderList = users.filter(x => x.gender == gender);
    var usertext = '';
    genderList.forEach(x => {
        usertext += `<li> ${x.name}</li>`;
    });
    list.innerHTML = usertext;
}
//# sourceMappingURL=userTask.js.map