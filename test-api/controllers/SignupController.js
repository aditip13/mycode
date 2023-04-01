const routes = require("express").Router()
const User = require("../models/User")
routes.post("/", async (req, res)=>{
    let response = await User.create(req.body);
    res.send({ success : true });
})

module.exports = routes;