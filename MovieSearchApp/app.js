var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});



app.get("/results", (req, res) => {
    var query = req.query.search;
    var url = `http://omdbapi.com/?apikey=thewdb&s=${query}`;
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("results", { data: data });
        }
    });
});


app.listen(3000, () => {
    console.log(`Movie server started!`);
});