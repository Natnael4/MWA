angular.module("meanGames").factory("GameFactory", GameFactory);

function GameFactory($http){
    return{
        getAllGames : getAllGames,
        getOneGame: getOneGame,
        deleteAGame : deleteGame,
        addAGame: addGame,
        updateAGame: updateGame
    };

    // function getAllGames(){
    //     return $http.get("api/games").then(complete).catch(failed);
    // }

    function getAllGames(offset){
        return $http.get("/api/games?offset="+ offset).then(complete).catch(failed);
    };

    function getOneGame(gameId){
        return $http.get("/api/games/"+gameId).then(complete).catch(failed);
    };

    function deleteGame(gameId){
        return $http.delete("/api/games/" + gameId).then(complete).catch(failed);
    };

    function addGame(game){
        return $http.post("/api/games", game).then(complete).catch(failed);
    };

    function updateGame(gameId, game){
        return $http.put("/api/games/"+ gameId, game).then(complete).catch(failed);
    };

    function complete(response){
        console.log(response.data);
        return response.data;
    }

    function failed(error){
        return error;
    }

}