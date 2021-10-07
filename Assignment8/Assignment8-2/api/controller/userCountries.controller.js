const mongoose = require("mongoose");
const Plane = mongoose.model("Plane"); 

//Get All UserCountries*******************************************************************************************

module.exports.getAllUserCountries = function (req, res) { //Route:planes/:planeId/UserCountries").get
    const planeId = req.params.planeId; 
    Plane.findById(planeId).select("UserCountries").exec(function (err, plane) {
        if(err){
            res.status(500).json(err);
        }else if(!plane){
            res.status(404).json({"message": "plane not found"});
        }else{
        res.status(200).json(plane.UserCountries);
        }
    });
}

//Done

//Get One UserCountry*******************************************************************************************

module.exports.getOneUserCountry= function(req, res) { //Route:planes/:planeId/UserCountries/:userCountriesId").get
    const planeId= req.params.planeId;
    const userCountriesId= req.params.userCountriesId;
    Plane.findById(planeId).select("UserCountries").exec(function(err, plane) {
    const userCountry= plane.UserCountries.id(userCountriesId);
    if(!userCountry){
        res.status(404).json({ "message": "UserCountry ID not found" });
    }
    else{
    res.status(200).json(userCountry); 
    }
    });
};

//Done

//Add a UserCountry*******************************************************************************************

module.exports.userCountryAdd = function (req, res) {  //Route:("/planes/:planeId/UserCountries").post
    const planeId = req.params.planeId;
    Plane.findById(planeId).exec(function (err, plane) {
        if (err) {
            console.log("Error finding plane");
            res.status(500).json(err);
        } else if (!plane) {
            console.log("plane id not found in database", planeId);
            res.status(404).json({ "message": "plane ID not found" + planeId });
        }
        else{
            const newUserCountry = req.body.UserCountries;
            plane.UserCountries.push(newUserCountry);
            plane.save(function(err, addedUserCountry){
                if(err){
                    console.log(err);
                    res.status(500).json(err);
                }
                else{
                    res.status(200).json({"message": "added UserCountry"+ addedUserCountry})
                }
            })
        } 
    })
};

//Done

//Update a UserCountry*******************************************************************************************

module.exports.userCountryUpdate = function (req, res) {  //Route:("/planes/:planeId/UserCountries/userCountriesId").put
    const planeId = req.params.planeId;
    const userCountriesId = req.params.userCountriesId;
    Plane.findById(planeId).exec(function (err, plane) {
        if (err) {
            console.log("Error finding plane");
            res.status(500).json(err);
          
        } else if (!plane) {
            console.log("plane id not found in database", planeId);
            res.status(404).json({ "message": "plane ID not found" + planeId });
        }
        else{
            const editUserCountry = plane.UserCountries.id(userCountriesId);
            editUserCountry.name = req.body.name;
            editUserCountry.fleetNum = req.body.fleetNum;
            plane.save(function(err, editedUserCountry){
                if(err){
                    res.status(500).json(err);
                }
                else{
                    res.status(200).json({"message": "edited UserCountry"+ editedUserCountry})
                }
            })
        } 
    })
};

//Delete a UserCountry*******************************************************************************************

module.exports.userCountryDelete = function (req, res) {  //Route:("/planes/:planeId/UserCountries/userCountriesId").delete
    const planeId = req.params.planeId;
    const userCountriesId = req.params.userCountriesId;
    Plane.findById(planeId).exec(function (err, plane) {
        if (err) {
            console.log("Error finding plane");
            res.status(500).json(err);
          
        } else if (!plane) {
            console.log("plane id not found in database", planeId);
            res.status(404).json({ "message": "plane ID not found" + planeId });
        }
        else{
            plane.UserCountries.id(userCountriesId).remove();
            plane.save(function(err, deletedUserCountry){
                if(err){
                    res.status(500).json(err);
                }
                else{
                    res.status(200).json({"message": "deleted UserCountry" + deletedUserCountry})
                }
            });
        } 
    })
};

//Done