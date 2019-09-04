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

app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
    res.send("you've reached the " + subreddit.toUpperCase() + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    res.send("you've reached a comment page");
});

//good practise to put the * on bottom because of route defaulting
app.get("*", function(req, res) {
    res.send("nothing is here!");
});
//tell express to listen for requests

app.listen(3000, function(){
    console.log("server started!");
});