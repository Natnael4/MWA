
angular.module("planeApp").controller("CountriesController",CountriesController);



function CountriesController(CountryFactory) {
    const vm = this;
    vm.name = "Countries Available";

    vm.isSubmitted = false;
  
        CountryFactory.getAllOffset(offset).then(function (response) {
            vm.planes = response;

        });
  


        vm.addACountry = function () {
            const postData = {
                name: vm.newCountryName,
                FleetNum: vm.newFleetNum,
            
            };
    
            if (vm.planeForm.$valid) {
                CountryFactory.addACountry(postData).then(function (response) {
                    console.log("Country added and saved");
                }).catch(function (error) {
                    console.log(error);
                });
            }else{
                vm.isSubmitted = true;
            }
    
        }




}