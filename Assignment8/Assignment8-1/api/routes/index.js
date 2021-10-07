
const express = require("express");
const router = express.Router();
const controllerGames = require("../controller/games.controllers");
const controllerPublisher = require("../controller/publisher.controller");
const controllerReviews = require("../controller/review.controller");



//Games routes*******************************************************************************************
router.route("/games").get(controllerGames.gamesGetAll)
                      .post(controllerGames.gamesAddOne);

router.route("/games/:gameId").get(controllerGames.gamesGetOne)
                              .put(controllerGames.gamesUpdateOne)
                              .delete(controllerGames.gamesDeleteOne);



//Publisher routes*******************************************************************************************
router.route("/games/:gameId/publisher").get(controllerPublisher.publisherGet) 
                                        .post(controllerPublisher.publisherAdd)
                                        .put(controllerPublisher.publisherUpdate)
                                        .delete(controllerPublisher.publisherDelete);



//review routes*******************************************************************************************
router.route("/games/:gameId/reviews/:reviewId").get(controllerReviews.reviewGetOne)
                                                .put(controllerReviews.reviewUpdate)
                                                .delete(controllerReviews.reviewDeleteReview);


router.route("/games/:gameId/reviews").post(controllerReviews.reviewAdd)
                                      .get(controllerReviews.getAllReviews);
                                    
 
                                      
//********************************************************************************************************

module.exports = router;