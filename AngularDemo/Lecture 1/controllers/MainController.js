'use strict';

angular.module('app').controller('MainController', function($scope) {

    $scope.data = {};
    $scope.data.mainCheck = "I am accessed from the Base Controller.";
});