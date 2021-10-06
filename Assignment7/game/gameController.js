
angular.module("myApp").controller("GameController", GameController);


function GameController($http, $routeParams) {
    const vm= this;
    const gameId= $routeParams.gameId; 
    $http.get(" https://api.pokemontcg.io/v2/cards?q=name:gardevoir"+gameId+"/random")
    .then(function(response) { 
        vm.game= response.data.data;
        console.log(vm.game);
    }); }