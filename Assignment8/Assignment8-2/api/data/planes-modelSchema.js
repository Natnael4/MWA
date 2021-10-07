const mongoose = require("mongoose");

const UserCountriesSchema = new mongoose.Schema({
    name : String,
    fleetNum : Number
});


const planesSchema = new mongoose.Schema({
    name : String,
    country : String,
    created : String,
    UserCountries : [UserCountriesSchema]
    
});

mongoose.model("Plane", planesSchema, "planes");