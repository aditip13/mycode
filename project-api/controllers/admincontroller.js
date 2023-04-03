const routes = require("express").Router();
const adminmodel = require("../models/admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

// ----------for creating username and password---------
// routes.get("/demo", (req, res) => {
//     var obj = { username: "admin", password: sha1("admin") };
//     adminmodel.create(obj, (err) => {
//         console.log("saved");
//     })
// })
//  ----------for creating username and password---------

routes.post("/login", (req, res) => {
    var u = req.body.username;
    var p = sha1(req.body.password);

    adminmodel.find({ username: u }, (err, result) => {
        if (result.length == 1) {
            if (result[0].password == p) {
                var token = jwt.sign({ id: result[0]._id }, "tss");
                res.send({ success: true, admintoken: token });
            } else {
                res.send({ success: false, type: 2 });
            }
        } else {
            res.send({ success: false, type: 1 });
        }
    })
})


module.exports = routes;