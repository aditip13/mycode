require("../config/database");
const mongoose = require("mongoose");

const b = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    re_password: String,
    gender: String,
    contact: String,
    address: String,
    city: String,
}, { collection: "signups" })

module.exports = mongoose.model("signups", b)

