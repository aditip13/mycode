const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors());
app.use(require("./config/routes"));

app.listen(3000, ()=>{
    console.log("Server Running");
})

/*
function listen(a, b){
    b();
}


*/