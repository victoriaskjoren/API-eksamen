class User {

    interests = [];
    matches = [];
    images = [];
    creditCard= [];

    constructor (fullName1, email, password, age, userID){
        this.fullName1 = fullName1;
        this.email = email;
        this.password = password;
        this.age = age;
        this.userID = userID
    }

}


class FreeUser extends User{
    constructor (fullName1, email, password, age, userID){
        super(fullName1, email, password, age, userID);
    }
}
class Interests {
    constructor (name){
        this.name = name;
    }
}
class Match {
    constructor(user){
        this.user = user;
    }
}

const interest1 = new Interests("Cars");
const interest2 = new Interests("Nature");
const interests = [interest1, interest2];

const match1 = new Match ("Jeppe");
const match2 = new Match ("Oskar");
const matches = [match1, match2];

// her kunne man lagt inn et ordentlig bilde, men nå sendes bare en string



const user1 = new User("Victoria Skjøren", "vic", "password","20", 1);
const user2 = new FreeUser("Hayley Sugden", "hay","passwrd", "20", 2);
const users = [user1, user2];



user1.interests= [interest1, interest2];
user2.interests = [interest2];

user1.matches = [match2];
user2.matches = [match1, match2];




module.exports = {
    getUsers() {
        return users;
    },
    getInterests(){
        return interests;
    },

    getMatches(){
        return matches;
    },
   

    FreeUser: FreeUser,
    Interests: Interests,
    Match: Match
}