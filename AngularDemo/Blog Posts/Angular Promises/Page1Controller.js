'use strict';

angular.module('app').controller('Page1Controller', function($scope, SimpleService) {
	
	$scope.result = "";
	
	$scope.simulateApiCall = function () {
		SimpleService.simulateApiCall()
			.then(
				function () {
					$scope.result = "Success!";
				}
			)
			.catch(
				function () {
					$scope.result = "Error!";
				}
			)
	};

	$scope.actualApiCall = function () {
		SimpleService.actualApiCall()
			.then(
				function (response) {
					$scope.result = response.data;
				}
			)
			.catch(
				function (error) {
					alert(error);
				}
			)
	}
});
