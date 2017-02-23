'use strict';

angular.module('app').controller('ProjectController', function($scope, ProjectService) {

    $scope.data = {};
    $scope.data.header1 = "Project View";
    $scope.data.header2 = "Data Binding Demonstration";
    $scope.data.selectedProject = "0";
    $scope.data.projects = ProjectService.findAll();
    $scope.data.project = $scope.data.projects[0];

    $scope.createProject = function() {
        ProjectService.save($scope.data.project);
    };

    $scope.switchProject = function() {
        $scope.data.project = $scope.data.projects[$scope.data.selectedProject];
    };
});