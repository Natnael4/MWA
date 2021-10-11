
angular.module("planeApp").controller("CountriesController",CountriesController);



function CountriesController(CountryFactory, $routeParams) {
    const vm = this;
    vm.name = "Countries Available";
    const id = $routeParams.planeId;
    vm.id = $routeParams.planeId;
    vm.isSubmitted = false;
  
        CountryFactory.getAllCountry(id).then(function (response) {
            vm.countries = response;

        });
        vm.addACountry = function () {
            const id = $routeParams.planeId;
            const postData = {
                name: vm.newCountryName,
                fleetNum: vm.newFleetNum
            
            };
    
            if (vm.countryForm.$valid) {
                CountryFactory.addACountry(id,postData).then(function (response) {
                }).catch(function (error) {
                    console.log(error);
                });
            }else{
                vm.isSubmitted = true;
            }
    
        }


        vm.deleteACountry = function(usrid){
            const id = $routeParams.planeId;
            
            CountryFactory.deleteACountry(id,usrid).then(function(response){
                console.log("Country deleted");
            });
        }




}