angular.module("planeApp",["ngRoute"]).config(config);

function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"welcome.html",
        controller:"PlanesController",
        controllerAs:"vm"
    }).when("/planes",{
        templateUrl:"angular-app/planes-list/planes.html",
        controller:"PlanesController",
        controllerAs:"vm"
    }).when("/planes/:planeId",{
        templateUrl:"angular-app/plane/plane.html",
        controller:"PlaneController",
        controllerAs:"vm"
    }).when("/addForm",{
        templateUrl:"angular-app/addPlane.html",
        controller:"PlanesController",
        controllerAs:"vm"
    }).otherwise({
        redirectTo:"/"
    })
}