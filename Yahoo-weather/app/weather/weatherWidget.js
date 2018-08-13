(function () {
    'use strict';

    angular
        .module('app.weather')
        .directive('weatherWidget', weatherWidget);

    function weatherWidget() {
        return {
            restrict: 'EA',
            templateUrl: 'app/weather/weather.html',
            controllerAs: 'weather',
            css: 'app/weather/weather.css',
            controller: 'Weather'
        }
    }
})(); 