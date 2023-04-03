const routes = require("express").Router();
const loginmodel = require("../models/signup");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res) => {
    var e = req.body.email;
    var p = sha1(req.body.password);

    loginmodel.find({ email: e }, (err, result) => {
        if (result.length == 1) {
            if (result[0].password == p) {
                const token = jwt.sign({ id : result[0]._id }, "tss")
                // console.log(token);
                res.send({ success: true, token : token });
            } else {
                res.send({ success: false, type: 2 });
            }
        } else {
            res.send({ success: false, type: 1 });
        }
    })
})

module.exports = routes;