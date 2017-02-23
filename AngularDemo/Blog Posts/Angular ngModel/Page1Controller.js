'use strict';

angular.module('app').controller('Page1Controller', function($scope, SimpleService) {

	//variables for our input boxes and the result
	$scope.value1 = 0;
	$scope.value2 = 0;
	$scope.result = "";

	//functions for our buttons to respond to our clicks
	$scope.add = function() {
		$scope.result = SimpleService.add($scope.value1, $scope.value2);
	};

	$scope.subtract = function() {
		$scope.result = SimpleService.subtract($scope.value1, $scope.value2);
	};

	$scope.concat = function() {
		$scope.result = SimpleService.concat($scope.value1, $scope.value2);
	};
});
