class AppUser {
    public name:string
    public readonly gender:Gender
    /**
     *
     */
    constructor(name:string, gender:Gender|number) {
        
        this.name = name
        this.gender = gender
    }
}
enum Gender {male=1, female}
type NewType = AppUser

const users: Array<NewType>= [new AppUser("Siroj", 1)]
const user:AppUser = new AppUser("Malika", 2)
const user2 = new AppUser("bobur", 32)

users.push(user)
users.push(user2)

function getUsers()
{
    let list = document.getElementById("userlist")
    const gender = document.getElementById("gender")!.innerText=='male'? 1 : 2
    const genderList = users.filter(x=>x.gender==gender)
    var usertext:string ='';
    genderList.forEach(x =>
    {
        usertext+=`<li> ${x.name}</li>`
    });
    list!.innerHTML = usertext;
    

}