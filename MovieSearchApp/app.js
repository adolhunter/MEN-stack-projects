var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", (req, res) => {
    request("http://www.omdbapi.com/?s=san diego&apikey=thewdb", (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", { data: data });
        }
    });
});


app.listen(3000, () => {
    console.log("Movie server started!");
});