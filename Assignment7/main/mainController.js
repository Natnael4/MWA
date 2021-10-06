
angular.module("myProperApp").controller("MainController", MainController);


function MainController($http){
         var vm = this;
         $http.get("https://api.pokemontcg.io/v2/cards?q=name:gardevoir")
         .then(function(response){
             vm.games = response.data.data;
             console.log(vm.games);
         });
}
