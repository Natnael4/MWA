const mongoose = require("mongoose");

const Plane = mongoose.model("Plane");


//*********************************************************************************** */

module.exports.getAllPlanes = function(req, res){
    var count = 6;
    var offset = 0;
    var maxDisplay = 12;

    if (req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    };
    if (req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    };
    if (isNaN(offset) || isNaN(count)) {
        res.status(400).json({ "Message": "Offset and Count should be numbers" });
        return;
    }
    if (count > maxDisplay) {
        res.status(400).json({ "message": "cannot exceed the count of " + maxDisplay });
        return;
    }

    Plane.find().skip(offset).limit(count).exec(function(err, planes){
        if(err){
            console.log("Error while finding planes");
            res.status(500).json(err);
        };
        if(planes){
            console.log("Found Planes", planes.length);
            res.status(200).json(planes);
        }
    });
};


//*********************************************************************************** */



module.exports.getOnePlane = function (req, res) {
    const planeID = req.params.planeId;
    Plane.findById(planeID).exec(function (err, planes) {
        if (err) {
            console.log("Error finding Plane");
            res.status(500).json(err);
        } else if (!planes) {
            res.status(404).json({ "message": "Plane ID not found" });
        } else {
            res.status(200).json(planes);
        }
    });
};



//*********************************************************************************** */


module.exports.addPlane = function (req, res) {

    const newPlane = req.body;
    

    Plane.create(newPlane, function (err, plane) {
        if (err) {
            console.log("Error creating plane");
            res.status(400).json(err);
        } else {
            console.log("Plane created", plane);
            res.status(200).json(plane);
        }
    });
};


//*********************************************************************************** */


module.exports.updatePlane = function (req, res) {
    const planeId = req.params.planeId;
    Plane.findById(planeId).exec(function (err, plane) {
        const response = { status: 204 };
        if (err) {
            console.log("Error finding plane");
            res.status(500).json(err);
        } else if (!plane) {
            res.status(500).json({ "message": "Plane ID not found" });
        }
        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
           
            plane.name = req.body.name;
            plane.country = req.body.country; 
            plane.created = req.body.created; 
            plane.save(function (err, updatedPlanes) {
                if (err) {
                    res.status(500).json(err);
                }
                else{
                    res.status(200).json({"message":"plane updated" + updatedPlanes})
                }
            });
        }
    });
};



//*********************************************************************************** */


module.exports.deleteOnePlane = function (req, res) {
    const planeId = req.params.planeId;
    console.log("DELETE planeId ", planeId); 
    Plane.findByIdAndRemove(planeId).exec(function (err, deletedPlane) {
   
        if (err) {
            console.log("Error finding plane"); 
            res.status(500).json(err);
        } else if (!deletedPlane) {
            res.status(404).json({ "message": "Plane ID not found" });
        }
        else{
            res.status(204).json({ "message": "Plane deleted" });
        }
    });
};

