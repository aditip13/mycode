require("../config/database");

const mongoose = require("mongoose");

const Category = mongoose.Schema({
    name: String
}, { collection: "categories" })

module.exports = mongoose.model("categories", Category);