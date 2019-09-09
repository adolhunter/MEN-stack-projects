var express = require("express");
bodyParser = require("body-parser");
mongoose = require("mongoose");
app = express();


mongoose.connect('mongodb://localhost:27017/restful_blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Mongoose setup
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
})

var Blog = mongoose.model("Blog", blogSchema);


//RESTful routes
app.get("/", (req, res) => {
    res.redirect("/blogs");
});


//INDEX route
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log("error");
        } else {
            res.render("index", { blogs: blogs });
        }
    });
})


//NEW route
app.get("/blogs/new", (req, res) => {
    res.render("new");
});



//CREATE route
app.post("/blogs", (req, res) => {
    //create blog
    Blog.create(req.body.blog, (err, newBlog) => {
        if (err) {
            res.render("new");
        //then, redirect to the index
        } else {
            res.redirect("/blogs");
        }
    });
});




app.listen(3000, () => {
    console.log("server is running!");
})