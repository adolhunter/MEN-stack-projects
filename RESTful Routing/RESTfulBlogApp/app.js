var express = require("express");
bodyParser = require("body-parser");
mongoose = require("mongoose");
app = express();


mongoose.connect('mongodb://localhost:27017/restful_blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.set("view enginer", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
//title
//image
//body
//created



app.listen(3000, () => {
    console.log("server is running!");
})