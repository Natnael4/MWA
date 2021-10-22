angular.module("meanGames").controller("GameController",GameController);

function starRating(star){
    return new Array(star);
}

function GameController(GameFactory,$routeParams){
    const vm = this;
    const id = $routeParams.gameId;
    vm.isSubmitted = false;
  
    GameFactory.getOneGame(id).then(function(response){
        vm.game = response;
        vm.rating = starRating(response.rate)
    });

    vm.deleteAGame = function(){
        GameFactory.deleteAGame(id).then(function(response){
            console.log("Game deleted");
        });
    }


    vm.updateGame = function () {
        const postData = {
            title: vm.updatedGameTitle,
            price: vm.updatedGamePrice,
            minPlayers: vm.updatedGamePlayers
        };
        console.log("Hello");

        // if (vm.gameupdateForm.$valid) {
            console.log("reached if");
            GameFactory.updateAGame(id,postData).then(function (response) {
                console.log("Game Updated and saved");
                // vm.message = "Game added succesfully, To go back select the buttons above";
            }).catch(function (error) {
                console.log(error);
                // vm.err= "Please make sure that you have entered valid data"
            });
        // }else{
        //     vm.isSubmitted = true;
        // }

    }

}