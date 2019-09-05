var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", (req, res) => {
    res.render("love.ejs", { thingVar: req.params.thing });
});


app.listen(3000, function () {
    console.log("server started!");
});
