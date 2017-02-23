'use strict';

angular.module('app').service('SimpleService', function() {

    return({
        add: add,
        subtract: subtract,
        concat: concat
    });

    function add(value1, value2) {
        return parseInt(value1) + parseInt(value2);
    }

    function subtract(value1, value2) {
        return parseInt(value1) - parseInt(value2);
    }

    function concat(value1, value2) {
        return value1 + value2;
    }
});
