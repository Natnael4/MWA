
const dbConnection = require("../data/dbconnection.js");


module.exports.gamesGetAll = function (req, res) {
    const db = dbConnection.get();
    const collection = db.collection("games"); 
    var offset = 0;
    var count = 6;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count);
    }
    collection.find().skip(offset).limit(count).toArray(function (err, docs) {
        console.log("Found games", docs);
        res.status(200).json(docs);
    });
}
   

    


