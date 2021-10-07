
angular.module("planeApp").controller("PlanesController",PlanesController);

function PlanesController(PlaneFactory){
    const vm = this;
    vm.name = "PLANES APP"
    PlaneFactory.getAllPlanes().then(function(response){
        vm.planes = response;
    })
}