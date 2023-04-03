const routes = require("express").Router();
const Product = require("../models/product");
const path = require("path");
const unique = require("unique-string-generator");

routes.post("/", (req, res) => {

    var formdata = JSON.parse(req.body.formdata);

    delete formdata._id;

    var image = req.files.image;

    var name = image.name;

    var arr = name.split(".");

    var ext = arr[arr.length - 1];

    var newname = unique.UniqueString()+"."+ext;

    formdata.image = newname;

    image.mv(path.resolve()+"/assets/product-images/"+newname, (err) => {
        Product.create(formdata, (err, result) => {
            res.send(result);
        })
    })
})

routes.get("/", (req, res) => {
    Product.find({}, (err, result) => {
        var new_result = result.map((x) => {
            x.image = "http://localhost:3000/product-images/" + x.name;
            return x;
        })
        res.send(new_result);
    })
})

routes.get("/:id", (req, res) => {
    var id = req.params.id;
    Product.find({ _id: id }, (err, result) => {
        res.send(result[0]);
    })
})

routes.delete("/:id", (req, res) => {
    var id = req.params.id;
    Product.deleteOne({ _id: id }, (err) => {
        res.send({ success: true });
    })
})

routes.put("/:id", (req, res) => {
    var id = req.params.id;
    var formdata = JSON.parse(req.body.formdata);
    delete formdata._id;
    if(req.files){
        var image = req.files.image;
        var name = image.name;
        var arr = name.split(".");
        var ext = arr[arr.length-1];
        var newname = unique.UniqueString()+"."+ext;
        formdata.image = newname;
        image.mv(path.resolve()+"/assets/product-images/"+newname);
    }else{
        delete formdata.image;
    }

    Product.updateOne({_id : id}, formdata, (err)=>{
        res.send({ success : true });
    })
})



module.exports = routes