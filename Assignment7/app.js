
angular.module("myProperApp", ['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"main/main.html",
        controller:"MainController",
        controllerAs: "mainCtrl"})
        .when("/game/:gameId", {
        templateUrl:"game/game.html",
        controller:"GameController",
        controllerAs: "gameCtrl"})
        otherwise({ redirectTo: "/"
    });
    };