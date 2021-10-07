angular.module("meanGames",["ngRoute"]).config(config);

function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"welcome.html"
    }).when("/games",{
        templateUrl:"angular-app/games-list/games.html",
        controller:"GamesController",
        controllerAs:"vm"
    }).when("/games/:gameId",{
        templateUrl:"angular-app/game/game.html",
        controller:"GameController",
        controllerAs:"vm"
    }).otherwise({
        redirectTo:"/"
    })
}