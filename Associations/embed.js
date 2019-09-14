var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/embed_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//post- title, content


var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);


//user- email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



User.findOne({ name: "Hermione Granger" }, (err, user) => {
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "3 Things I really hate",
            content: "Voldemort, Voldemort, Voldemort"
        });
        user.save((err, user) => {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});


/* var newUser = new User({
    email: "hermione@hogwarts.edu",
    name: "Hermione Granger"
})

newUser.posts.push({
    title: "How to brew polyjuice potion",
    content: "Go to potion class"
});
newUser.save((err,user) => {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});
 */

/* var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});

newPost.save((err,post) => {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});
 */
