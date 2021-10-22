
angular.module("meanGames").controller("GamesController",GamesController);

function GamesController(GameFactory){
    const vm = this;
    vm.title = "MEAN GAMES APP"
    vm.offset = 0;
    vm.isSubmitted = false;
    // GameFactory.getAllGames().then(function(response){
    //     vm.games = response;
    // })

    vm.getAll = function (offset) {
        GameFactory.getAllGames(offset).then(function (response) {
            vm.games = response;

        });
    }

        vm.ne = function () {

            vm.offset += 5;
            console.log(vm.offset);
            vm.getAll(vm.offset);
            if (vm.games.length<5) {
                vm.offset = 0;
                vm.getAll(vm.offset);
            }
            
        }

        vm.pr = function () {
            vm.offset -= 5;
            console.log(vm.offset);
            if (vm.offset < 0) {
                vm.offset = 0;
            }
            vm.getAll(vm.offset);
            
        }

        vm.getAll(vm.offset);


        vm.addAGame = function () {
            const postData = {
                title: vm.newGameTitle,
                price: vm.newGamePrice,
                minPlayers: vm.newGamePlayers,
            
            };
    
            if (vm.gameForm.$valid) {
                GameFactory.addAGame(postData).then(function (response) {
                    console.log("Game added and saved");
                    vm.message = "Game added succesfully, To go back select the buttons above";
                }).catch(function (error) {
                    console.log(error);
                    vm.err= "Please make sure that you have entered valid data"
                });
            }else{
                vm.isSubmitted = true;
            }
    
        }


}