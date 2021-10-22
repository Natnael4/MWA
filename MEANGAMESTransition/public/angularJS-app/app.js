angular.module("meanGames",["ngRoute"]).config(config);

function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"welcome.html"
    }).when("/games",{
        templateUrl:"angularJS-app/games-list/games.html",
        controller:"GamesController",
        controllerAs:"vm"
    }).when("/games/:gameId",{
        templateUrl:"angularJS-app/game/game.html",
        controller:"GameController",
        controllerAs:"vm"
    }).when("/addGame",{
        templateUrl:"angularJS-app/games-list/addGame.html",
        controller:"GamesController",
        controllerAs:"vm"
    }).when("/register", {
        templateUrl:"angularJS-app/register/register.html",
        controller:"RegisterController",
        controllerAs:"vm",
    }).otherwise({
        redirectTo:"/"
    })
}