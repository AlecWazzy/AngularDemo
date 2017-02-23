'use strict';

angular.module('app').service('SimpleService', function($q, $timeout, $http) {

    return({
        simulateApiCall: simulateApiCall,
	    findOne: findOne
    });

    function simulateApiCall() {
        var deferred = $q.defer();

        $timeout(function () {
            deferred.resolve();
            //deferred.reject();
        }, 1500);

        return deferred.promise;
    }

	function findOne(id) {
		return $http.get('/Api/Data/' + id);
	}
});
