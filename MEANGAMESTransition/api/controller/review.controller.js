const mongoose = require("mongoose");
const Game = mongoose.model("Game"); 




module.exports.reviewGetOne = function (req, res) { //  /games/:gameId/reviews/:reviewId"
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    console.log("GET reviewId " + reviewId + " for gameId " + gameId); 
    Game.findById(gameId).select("reviews").exec(function (err, game) {
        console.log("Reviews",game.reviews);

        const review = game.reviews.id(reviewId);
        if(review){
            res.status(200).json(review);
        }else{
            res.status(404).json({"message":"Review not available"});
        }

        
    });
}
//Done

//*********************************************************************************** */

module.exports.getAllReviews = function (req, res) {  // "/games/:gameId/reviews").get
    const gameId = req.params.gameId; 
    Game.findById(gameId).select("reviews").exec(function (err, doc) {
        res.status(200).json(doc.reviews);
    });
}

//Done

//*********************************************************************************** */


module.exports.reviewAdd = function (req, res) {  //"/games/:gameId/reviews").post
    const gameId = req.params.gameId;
    console.log("Get gameId ", gameId);
    Game.findById(gameId).exec(function (err, game) {
        if (err) {
            console.log("Error finding game");
            res.status(500).json(err);
          
        } else if (!game) {
            console.log("Game id not found in database", gameId);
            res.status(404).json({ "message": "Game ID not found" + gameId });
        }
        else{
            const newReview = req.body.review;
            game.reviews.push(newReview);
            game.save(function(err, addedReview){
                if(err){
                    res.status(500).json(err);
                }
                else{
                    res.status(200).json({"message": "addedReview"+ addedReview})
                }
            })
        } 
    })
};


//Done

//*********************************************************************************** */


module.exports.reviewUpdate = function (req, res) {
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    console.log("GET reviewId " + reviewId + " for gameId " + gameId); 
    Game.findById(gameId).select("reviews").exec(function (err, game) {
        console.log("Reviews",game.reviews)

        
        game.reviews.id(reviewId).name=req.body.review.name;
        game.reviews.id(reviewId).review=req.body.review.review;
        console.log(game.reviews.id(reviewId).name);
        console.log(game.reviews.id(reviewId).review);
        
        

        res.status(200).json({"message":"Review Updated"});
    });
}

// not done


//*********************************************************************************** */

module.exports.reviewDeleteReview = function (req, res) {  //"/games/:gameId/reviews/:reviewId").delete
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    console.log("GET reviewId " + reviewId + " for gameId " + gameId); 
    Game.findById(gameId).select("reviews").exec(function (err, game) {
       
        console.log()
        game.reviews.id(reviewId).remove();
        game.save(function(err, deletedReview){
            if(err){
                res.status(500).json(err);
            }
            else{
                res.status(200).json({"message": "deletedReview" + deletedReview})
            }
        });
    });
}

//Done