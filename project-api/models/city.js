require("../config/database");
const mongoose = require("mongoose");

const a = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, { collection : "city"});

module.exports = mongoose.model("city", a)