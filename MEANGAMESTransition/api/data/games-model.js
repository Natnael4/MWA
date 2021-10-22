const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     review: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        "default": Date.now
    }
});



const publisherSchemas = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    country: {
        type: String,
        "default": "USA"
    }
});


const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: Number,
    minAge: Number,
    designers: [String],
    players: Number,
    rate: {
        type: Number,
        min: 1,
        max: 5,
        "default": 1
    },
    minPlayers: Number,
    maxPlayers: Number,
    minAge: Number,

    publisher: publisherSchemas,

    reviews : [reviewSchema]

});

mongoose.model("Game", gameSchema, "games");