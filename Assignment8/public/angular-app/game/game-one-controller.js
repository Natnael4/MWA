angular.module("meanGames").controller("GameController",GameController);

function starRating(star){
    return new Array(star);
}

function GameController(GameFactory,$routeParams){
    const vm = this;
    const id = $routeParams.gameId;
  
    GameFactory.getOneGame(id).then(function(response){
        vm.game = response;
        vm.rating = starRating(response.rate)
    });
}