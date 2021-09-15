var express = require('express');
var app = express();
require('dotenv').config();
console.log("Hello World");

/*app.use("/", (req, res, next)=>{
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});*/

app.get("/now", (req,res,next)=>{
    req.time=new Date().toString();
    next();
},function(req,res){
    res.send({time: req.time});
}
);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req,res)=>{
    console.log(process.env.MESSAGE_STYLE);
    if(process.env.MESSAGE_STYLE=="uppercase"){
        res.json({"message": "HELLO JSON"});
    }else{
        res.json({"message": "Hello json"});
    }
    
});

app.use("/public", express.static(__dirname + "/public"));



































 module.exports = app;
