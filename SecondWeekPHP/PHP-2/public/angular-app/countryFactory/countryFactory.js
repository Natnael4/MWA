angular.module("planeApp").factory("CountryFactory", CountryFactory);

function CountryFactory($http){
    return{
        getAllCountry : getAllCountry,
        addACountry : addCountry,
        deleteACountry : deleteCountry,
        getOneCountry: getOne
        
    };


    function getAllCountry(planeId){
        return $http.get("/api/planes/"+planeId+"/userCountries").then(complete).catch(failed);
    }

    // function getOne(planeId){
    //     return $http.get("/api/planes/"+planeId).then(complete).catch(failed);
    // };

    // function deleteCountry(planeId){
    //     return $http.delete("/api/planes/"+planeId+"/userCountries/"+userCountriesId).then(complete).catch(failed);userCountriesId
    // };

    function addCountry(planeId, country){
        return $http.post("/api/planes/"+planeId+"/userCountries", country).then(complete).catch(failed);
    }

    function complete(response){
        console.log(response.data);
        return response.data;
    }

    function failed(error){
        return error;
    }

}