const routes = require("express").Router();
const signupmodel = require("../models/signup");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.get("/", (req, res) => {
    signupmodel.find({}, (err, result) => {
        res.send(result);
    })
})

routes.post("/", (req, res) => {
    delete req.body.re_password;
    req.body.password = sha1(req.body.password);
    signupmodel.create(req.body, (err) => {
        // res.send({ success : true});
        console.log("data saved");
    })
});

routes.get("/profile", (req, res) => {
    // console.log(req.headers.authorization);
    // res.send({ name : "Vishal"});
    var token = req.headers.authorization;
    jwt.verify(token, "tss", (err, obj) => {
        if (err) {
            console.log("*******");
        } else {
            // console.log(obj);
            var id = obj.id;
            signupmodel.find({ _id: id }, (err, result) => {
                res.send(result);
            })
        }
    });
})

module.exports = routes;