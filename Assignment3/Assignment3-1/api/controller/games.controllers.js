const gamesData = require("../data/games.json");

module.exports.gamesGetAll = function(req, res){
    console.log("JSON request received");
    res.status(200).json(gamesData);
};
