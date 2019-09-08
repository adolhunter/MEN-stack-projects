var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new to the database

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "bland"
}, (err,cat) => {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});


/* var george = new Cat({
    name: "Mrs. Norris",
    age: 13,
    temperament: "Evil"
});

george.save((err, cat) => {
    if (err) {
        console.log("Something went wrong!");
    } else {
        console.log("We just saved a dog to the DB");
        console.log(cat);
    }
}); */


//retrieve all cats from the DB and console.log each one

Cat.find({},(err,cats)=> {
    if(err) {
        console.log("we have an error");
        console.log(err)
    } else {
        console.log("All the cats");
        console.log(cats);
    }
});