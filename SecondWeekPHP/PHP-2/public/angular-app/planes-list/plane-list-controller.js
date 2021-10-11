
angular.module("planeApp").controller("PlanesController",PlanesController);



function PlanesController(PlaneFactory) {
    const vm = this;
    vm.name = "Planes Available";
    vm.offset = 0;
    vm.isSubmitted = false;
    vm.getAll = function (offset) {
        PlaneFactory.getAllOffset(offset).then(function (response) {
            vm.planes = response;

        });
    }

        vm.ne = function () {

            vm.offset += 5;
            console.log(vm.offset);
            vm.getAll(vm.offset);
            if (vm.planes.length===0) {
                vm.offset = 0;
                vm.getAll(vm.offset);
            }
        }

        vm.pr = function () {
            vm.offset -= 5;
            console.log(vm.offset);
            if (vm.offset < 0) {
                vm.offset = 0;
            }
            vm.getAll(vm.offset);
            
        }

        vm.getAll(vm.offset);   // GETALL WITH OR WITHOUT OFFSET


        vm.addAPlane = function () {
            const postData = {
                name: vm.newPlaneName,
                country: vm.newPlaneCountry,
                created: vm.newPlaneCreated,
            
            };
    
            if (vm.planeForm.$valid) {
                PlaneFactory.addAPlane(postData).then(function (response) {
                    console.log("Plane added and saved");
                }).catch(function (error) {
                    console.log(error);
                });
            }else{
                vm.isSubmitted = true;
            }
    
        }




}