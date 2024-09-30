const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// const session = require('express-session')
const NewsuserModel = require('./models/Newsuser')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/newsuser");

app.post("/login", (req, res)=>{
    const {email, password} = req.body;
    NewsuserModel.findOne({email: email})
    .then(user =>{
        if(user){
            console.log(user);
            if(user.password === password){
                res.json("Sucess")
            } else{
                res.status(400).json({ error: "Password incorrect" });
            }
        } else {
            res.json("no record existed")
        }
    })
    
})


app.post('/register',(req, res)=>{
    NewsuserModel.create(req.body)
    .then(newsusers => res.json(newsusers))
    .catch(err =>res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})