class AppUser {
    public name:string
    public gender:Gender
    /**
     *
     */
    constructor(name:string, gender:Gender|number) {
        
        this.name = name
        this.gender = gender
    }
}
enum Gender {male=1, female}
const users: Array<AppUser>= [new AppUser("Siroj", 1)]
const user:AppUser = new AppUser("Malika", 2)
users.push(user)

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