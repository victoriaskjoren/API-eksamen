const { getUsers, User } = require("./script");

module.exports = {
    getUsers(req, res){
        const users = getUsers();    
        return res.status(200).send(users)
    },
    deleteUser(req,res){
        const users = getUsers();
        //req.params.userID er verdien som er skrevet ved /:userID : gjør at den må være unik
        const userID = req.params.userID
        // itererer gjennom listen med brukere
        //sjekker om userID brukeren har skrevet inn er den samme som man vil slette
        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                //sletter user fra users
                users.splice(i,1)
                //response om alt kjører fint 
                return res.status(200).send("User deleted!")
            }
        }
        
        return res.status(404).send("User doesn´t exist!")

    },
    createUser(req,res){
        const users = getUsers();
        // Oppretter en ny bruker, også hardcoded
        const user3 = new User("Markus", "mail", "password", 19, 3);
        users.push(user3)
        // returnerer response som sender instansen user3
        return res.status(201).send(user3)
    },

 
}

