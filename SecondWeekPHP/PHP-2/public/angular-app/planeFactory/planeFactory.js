angular.module("planeApp").factory("PlaneFactory", PlaneFactory);

function PlaneFactory($http){
    return{
        getAllPlanes : getAllPlanes,
        getOnePlane: getOne,
        getAllOffset : getAllOffset,
        deleteAPlane : deletePlane,
        addAPlane : addPlane
    };

    function getAllPlanes(){
        return $http.get("api/planes").then(complete).catch(failed);
    }

    function getAllOffset(offset){
        return $http.get("/api/planes?offset="+ offset).then(complete).catch(failed);
    }

    function getOne(planeId){
        return $http.get("/api/planes/"+planeId).then(complete).catch(failed);
    };

    function deletePlane(planeId){
        return $http.delete("/api/planes/" + planeId).then(complete).catch(failed);
    };

    function addPlane(plane){
        return $http.post("/api/planes", plane).then(complete).catch(failed);
    }

    function complete(response){
        console.log(response.data);
        return response.data;
    }

    function failed(error){
        return error;
    }

}