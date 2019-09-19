var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/embed_demo_2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var Post = require("./models/post");
var User = require("./models/user")




/* // find User
User.findOne({ email: "bob@gmail.com" }).populate("posts").exec((err, user) => {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
}); */




Post.create({
    title: "How to cook the best burger part IV",
    content: "lorem1"
}, (err, post) => {
    User.findOne({ email: "bob@gmail.com" }, (err, foundUser) => {
        if (err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
        }
    })
});

/* User.create({
    email: "bob@gmail.com",
    name: "Bob Belcher"
})

 */