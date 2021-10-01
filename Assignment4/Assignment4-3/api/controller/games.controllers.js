
const dbConnection = require("../data/dbconnection.js");


module.exports.gamesGetAll = function (req, res) {
    const db = dbConnection.get();
    const collection = db.collection("games");

       var count = 6;
  
    if (req.query && req.query.count) {
        newcount = parseInt(req.query.count);
        if (newcount>9){
           res.status(404).send("Game number exceeds 9 games");
        }
        else{
            count = newcount;
            }
    }
    collection.find().limit(count).toArray(function (err, docs) {
        console.log("Found games", docs);
        res.status(200).json(docs);
    });
}
   

    


