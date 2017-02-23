'use strict';

angular.module('app').config(function ($routeProvider){

    $routeProvider.
    when('/Dashboard', {
        templateUrl: "templates/dashboard.html",
        controller: "DashboardController"
    }).
    when('/Projects', {
        templateUrl: "templates/projects.html",
        controller: "ProjectController"
    }).
    otherwise({
        redirectTo: '/Dashboard'
    });
});
