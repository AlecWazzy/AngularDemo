'use strict';

angular.module('app').service('Api', function() {

    return({
        findAll: findAll,
        save: save
    });

    function findAll() {
        return [
            new Project("Operation Pass Emerging Trends", "Red", "Ongoing"),
            new Project("Reading Week", "Blue", "Complete"),
            new Project("Get A Job", "Green", "Pending")
        ];
    }

    function save(project) {
        alert("Project Saved!" + "\n\n" +
            "Name: " + project.name + "\n" +
            "Type: " + project.type + "\n" +
            "Status: " + project.status);
    }
});
