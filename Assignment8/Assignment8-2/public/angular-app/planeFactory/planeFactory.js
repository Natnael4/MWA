angular.module("planeApp").factory("PlaneFactory", PlaneFactory);

function PlaneFactory($http){
    return{
        getAllPlanes : getAllPlanes,
        getOnePlane: getOnePlane
    };

    function getAllPlanes(){
        return $http.get("api/planes").then(complete).catch(failed);
    }

    function getOnePlane(planeId){
        return $http.get("/api/planes/"+planeId).then(complete).catch(failed);
    };

    function complete(response){
        console.log(response.data);
        return response.data;
    }

    function failed(error){
        return error;
    }

}