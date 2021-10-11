angular.module("planeApp").controller("PlaneController",PlaneController);




function PlaneController(PlaneFactory, $routeParams){
    const vm = this;
    const id = $routeParams.planeId;
    vm.isSubmitted = true;
    
    PlaneFactory.getOnePlane(id).then(function(response){
        vm.plane = response;

    });

    vm.deleteAPlane = function(){
        PlaneFactory.deleteAPlane(id).then(function(response){
            console.log("Plane deleted");
        });
    }


    vm.updateAPlane = function () {
        const postData = {
            name: vm.newPlaneName,
            country: vm.newPlaneCountry,
            created: vm.newPlaneCreated,
        
        };

        if (vm.planeForm.$valid) {
            const id = $routeParams.planeId;
            PlaneFactory.updateAPlane(id,postData).then(function (response) {
                console.log("Plane updated");
            }).catch(function (error) {
                console.log(error);
            });
        }else{
            vm.isSubmitted = true;
        }

    }

    
}