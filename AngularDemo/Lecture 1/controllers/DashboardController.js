'use strict';

angular.module('app').controller('DashboardController', function($scope) {

    $scope.data = {};
    $scope.data.header = "Dashboard View";
    $scope.data.quote = "AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.";
    $scope.data.source = "From Angular's website";
});