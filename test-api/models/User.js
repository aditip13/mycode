const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/testdb");

const User = mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    contact : String,

})

module.exports = mongoose.model("user", User);