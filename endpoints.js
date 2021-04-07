
const express = require ("express")
const app = express()
const cors = require("cors")
const port = 3001
const fs = require("fs")
const bodyParser = require("body-parser")

const jwt = require("jsonwebtoken")
const {getUsers, deleteUser, createUser} = require ("./usersEndpoints")
const {getMatches, deleteMatch, newMatch} = require("./matchesEndpoint")

app.use(cors({origin: true}))
app.use(bodyParser.json())

app.get("/users", getUsers )
app.delete("/users/:userID", deleteUser )
app.post("/users", createUser )

app.get("/users/:userID/matches", getMatches )
app.delete("/users/:userID/matches/:match", deleteMatch )
app.post("/users/:userID/matches", newMatch )



app.listen(port, 
    () => console.log(`Listening on port ${port} `));







