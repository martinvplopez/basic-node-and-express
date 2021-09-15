var express = require('express');
var app = express();
console.log("Hello World");
let path= __dirname + "/views/index.html"

app.get("/", (req,res)=>{
    res.sendFile(path);
});



































 module.exports = app;
