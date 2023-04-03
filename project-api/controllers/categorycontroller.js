const routes = require("express").Router();
const categorymodel = require("../models/Category");

routes.post("/", (req, res) => {
    categorymodel.create(req.body, (err, result) => {
        res.send({ result});
    })
})

routes.get("/", (req, res) => {
    categorymodel.find({}, (err, result) => {
        res.send(result);
    })
})
routes.get("/:id", (req, res) => {
    var id = req.params.id;
    categorymodel.find({ _id : id }, (err, result) => {
        res.send(result);
    })
})
routes.delete("/:id", (req, res) => {
    var id = req.params.id;
    categorymodel.deleteOne({ _id : id }, (err) => {
        res.send({ success : true });
    })
})
routes.put("/:id", (req, res) => {
    var id = req.params.id;
    categorymodel.updateOne({ _id : id }, req.body, (err) => {
        res.send({success : true});
    })
})

module.exports = routes;