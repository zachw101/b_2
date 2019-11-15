var mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
    rating: {type: String},
    comment: {type: String, default: ""},
}, {timestamps: true });

var CakeSchema = new mongoose.Schema({
    baker: {type: String, default: ""},
    image: {type: String, default: ""},
    ratings: [RatingSchema]
}, {timestamps: true });

mongoose.model("Rating", RatingSchema);
mongoose.model("Cake", CakeSchema);