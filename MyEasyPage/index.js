var express = require("express");
var route = express();
const port = 3000;

route.get("/", function(req, res){
    res.send("Hi there, welcome to my simple page!");
});

route.get("/speak/pig", function(req, res){
    res.send("The pig says 'Oink'");
});

route.get("/speak/cow", function(req, res){
    res.send("The cow says 'Moo'");
});

route.get("/speak/dog", function(req, res){
    res.send("The dog says 'Woof Woof!'");
});

route.get("/repeat/:text/:number", function(req, res) {
    var text = req.params.text;
    var number = req.params.number;
    var sentMessage = "";
    for (var i = 0; i < number; i++) {
        sentMessage += " " + text;
    }
    res.send(sentMessage);
}); 

route.get("*", function(req,res) {
    res.send("Sorry, page not found..What are you doing with your life?")
});

route.listen(port, function() {
    console.log("server starts!");
})

