require("../config/database");
const mongoose = require("mongoose");

const b = mongoose.Schema({
    username : String,
    password : String,
   
})  

module.exports = mongoose.model("admin", b)