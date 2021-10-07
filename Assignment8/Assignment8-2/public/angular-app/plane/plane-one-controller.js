angular.module("planeApp").controller("PlaneController",PlaneController);



function PlaneController(PlaneFactory,$routeParams){
    const vm = this;
    const id = $routeParams.planeId;
  
    PlaneFactory.getOnePlane(id).then(function(response){
        vm.plane = response;
    });
}