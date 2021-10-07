
angular.module("meanGames").controller("GamesController",GamesController);

function GamesController(GameFactory){
    const vm = this;
    vm.title = "MEAN GAMES APP"
    GameFactory.getAllGames().then(function(response){
        vm.games = response;
    })
}