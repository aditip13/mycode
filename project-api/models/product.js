
require("../config/database");

const mongoose = require("mongoose");

const Product = mongoose.Schema({

    name: String,
    price: Number,
    discount: Number,
    description: String,
    category: String,
    image : String

}, { collection: "products" })

module.exports = mongoose.model("products", Product);