angular.module("planeApp").factory("UsersDataFactory", UsersDataFactory);

function UsersDataFactory($http) {
    return {
        register: addUser
    }


    function addUser(user) {
        return $http.post("/api/users/", user).then(complete).catch(failed)
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;
    }
}