'use strict';

angular.module('app').config(function ($routeProvider){

    $routeProvider.
    when('/Dashboard', {
        templateUrl: "dashboard.html"
    }).
    when('/Page1', {
        templateUrl: "page1.html"
    }).
    when('/Page2', {
        templateUrl: "page2.html"
    }).
    otherwise({
        redirectTo: '/Dashboard'
    });
});
