class User {

    matches = [];
    images = [];

    constructor (fullName1, email, password, age, userID){
        this.fullName1 = fullName1;
        this.email = email;
        this.password = password;
        this.age = age;
        this.userID = userID
    }

}

class Match {
    constructor(user){
        this.user = user;
    }
}

const match1 = new Match ("Jeppe");
const match2 = new Match ("Oskar");
const matches = [match1, match2];



const user1 = new User("Victoria Skjøren", "vic", "password","20", 1);
const user2 = new User("Hayley Sugden", "hay","passwrd", "20", 2);
const users = [user1, user2];

user1.matches = [match2];
user2.matches = [match1, match2];


module.exports = {
    getUsers() {
        return users;
    },
   
    getMatches(){
        return matches;
    },
    createUser(){
        return users;
    },
   
    Match: Match
}