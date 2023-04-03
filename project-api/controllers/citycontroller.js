const routes = require("express").Router();
const citymodel = require("../models/city");

routes.get("/", (req, res)=>{
    citymodel.find({}, (err, result)=>{
        res.send(result);
    })
})

module.exports = routes;