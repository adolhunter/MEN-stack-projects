var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect('mongodb://localhost:27017/auth_demo_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var app = express();

app.use(require("express-session")({
    secret: "Hey what are you looking at",
    resave: false,
    saveUninitialized: false
}));

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({
    extended: true
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==============================
// routes
// =============================

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/secret", (req, res) => {
    res.render("secret");
});

//show sign up form
app.get("/register", (req, res) => {
    res.render("register");
});

//handling user sign up
app.post("/register", (req, res) => {
    req.body.username
    req.body.password
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
            if (err) {
                console.log(err);
                return res.render("register");
            } else {
                passport.authenticate("local")(req, res, () => {
                    res.redirect("/secret");
                });
            }
    });
});

app.listen(3000, () => {
    console.log("server started!");
});