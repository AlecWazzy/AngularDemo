'use strict';

angular.module('app').config(function ($routeProvider){

    $routeProvider.
    when('/Dashboard', {
        templateUrl: "dashboard.html"
    }).
    when('/Page1', {
        templateUrl: "page1.html",
	    controller: "Page1Controller"
    }).
    when('/Page2', {
        templateUrl: "page2.html",
        controller: "Page2Controller"
    }).
    otherwise({
        redirectTo: '/Dashboard'
    });
});
