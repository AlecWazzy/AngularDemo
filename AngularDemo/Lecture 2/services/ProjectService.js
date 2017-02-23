'use strict';

angular.module('app').service('ProjectService', function(Api) {

    return({
        findAll: findAll,
        save: save
    });

    function findAll() {
        return Api.findAll();
    }

    function save(project) {
        return Api.save(project);
    }
});
