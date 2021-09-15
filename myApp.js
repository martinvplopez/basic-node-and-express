var express = require('express');
var app = express();
console.log("Hello World");
let path= __dirname + "/views/index.html"

app.get("/", (req,res)=>{
    res.sendFile(path);
});

app.use("/public", express.static(__dirname + "/public"));



































 module.exports = app;
