var express = require("express");

var app = express();

// "/" => "Hi there!"
app.get("/", function(req,res){
    res.send("Hi there!");
});


// "/bye" => "Goodbye!"

app.get("/bye", function(req,res){
    res.send("Goodbye!");
});

// "/dog" => "Meow!"
app.get("/meow", function(req,res){
    res.send("Meow!");
});


//tell express to listen for requests

app.listen(3000, function(){
    console.log("server started!");
});