var express = require("express");
app = express();
bodyParser = require("body-parser");
mongoose = require("mongoose");
Campground = require("./models/campground");
seedDB = require("./seeds");

seedDB();
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");




app.get("/", (req, res) => {
    res.render("landing");
});

//INDEX
app.get("/campgrounds", (req, res) => {
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { campgrounds: allCampgrounds })
        }
    });
});

//CREATE
app.post("/campgrounds", (req, res) => {
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = { name: name, image: image, description: description };
    //create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

//NEW
app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

//SHOW show more info about one campground
app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            res.render("show", { campground: foundCampground });
        }
    });
});


app.listen(3000, () => {
    console.log("server started!");
});
