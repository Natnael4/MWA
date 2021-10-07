const express = require("express");
const router = express.Router();
const controllerPlanes = require("../controller/planes.controller");
const controllerUserCountries = require("../controller/userCountries.controller");



//Planes Route*******************************************************************************************
router.route("/planes").get(controllerPlanes.getAllPlanes)
                         .post(controllerPlanes.addPlane);
                         

router.route("/planes/:planeId").get(controllerPlanes.getOnePlane)
                                .delete(controllerPlanes.deleteOnePlane)
                                .put(controllerPlanes.updatePlane);




//userCountries Route*******************************************************************************************
router.route("/planes/:planeId/userCountries").get(controllerUserCountries.getAllUserCountries)
                                            .post(controllerUserCountries.userCountryAdd);

router.route("/planes/:planeId/userCountries/:userCountriesId").get(controllerUserCountries.getOneUserCountry)
                                                      .put(controllerUserCountries.userCountryUpdate)
                                                      .delete(controllerUserCountries.userCountryDelete);


module.exports = router;