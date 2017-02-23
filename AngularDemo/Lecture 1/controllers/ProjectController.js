'use strict';

angular.module('app').controller('ProjectController', function($scope) {

    $scope.data = {};
    $scope.data.header1 = "Project View";
    $scope.data.header2 = "Data Binding Demonstration";
    $scope.data.project = {
        name: "Operation Pass Emerging Trends",
        type: "Red",
        status: "Ongoing"
    }
});