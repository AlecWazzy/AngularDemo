'use strict';

angular.module('app').controller('DashboardController', function($scope, SimpleService) {

    $scope.data = {};
    $scope.data.header = "Dashboard View";
    $scope.data.header2 = "Simple Service Demonstration";
    $scope.data.value1 = 0;
    $scope.data.value2 = 0;
    $scope.data.header3 = "Result";
    $scope.data.result = "";

    $scope.add = function() {
        $scope.data.result = SimpleService.add($scope.data.value1, $scope.data.value2);
    };

    $scope.subtract = function() {
        $scope.data.result = SimpleService.subtract($scope.data.value1, $scope.data.value2);
    };

    $scope.concat = function() {
        $scope.data.result = SimpleService.concat($scope.data.value1, $scope.data.value2);
    };
});