var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/fallinlovewith/:thing", (req, res) => {
    res.render("love", { thingVar: req.params.thing });
});

app.get("/posts", (req, res) => {
    var posts = [
        { title: "post 1", author: "Susy" },
        { title: "My adorable pet bunny", author: "Charlie" },
        { title: "Can you believe this pomsky?", author: "Colt" }
    ];

    res.render("posts", { posts: posts })
});



app.listen(3000, function () {
    console.log("server started!");
});
