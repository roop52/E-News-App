const mongoose = require('mongoose')

const NewuserSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String

})

const NewsuserModel = mongoose.model("newsusers", NewuserSchema)

module.exports = NewsuserModel