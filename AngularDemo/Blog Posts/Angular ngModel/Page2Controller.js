'use strict';

angular.module('app').controller('Page2Controller', function($scope) {

	//value for our data binding demonstration
	$scope.value1 = 0;

	/*
	Modified Using Business Logic
	NOTE: This code is usually separated into a service, but was included here for demonstration purposes
	This is executed every time the user presses the Increment button
	*/
	$scope.increment = function() {
		$scope.value1++;
	};
});
