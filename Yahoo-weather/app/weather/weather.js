﻿(function () {
    'use strict';

    angular
        .module('app.weather')
        .controller('Weather', Weather);

    Weather.$inject = ['dataservice', '$timeout'];

    function Weather(dataservice, $timeout) {
        var vm = this;
        vm.forecast;

        getWeather();
        function getWeather() {
            dataservice.getWeather(success, failure);
        }

        function success(response) {
            $timeout(function () {
                vm.forecast = response.query.results.channel;
                console.log(vm.forecast);
            }, 5);


        }

        function failure(response) {
            console.log(JSON.stringify(response));
        }

        vm.setWeatherIcon = function(condid) {

            switch (condid) {
                case '0': var icon = '<i class="wi wi-tornado"></i>';
                    break;
                case '1': var icon = '<i class="wi wi-storm-showers"></i>';
                    break;
                case '2': var icon = '<i class="wi wi-tornado"></i>';
                    break;
                case '3': var icon = '<i class="wi wi-thunderstorm"></i>';
                    break;
                case '4': var icon = '<i class="wi wi-thunderstorm"></i>';
                    break;
                case '5': var icon = '<i class="wi wi-snow"></i>';
                    break;
                case '6': var icon = '<i class="wi wi-rain-mix"></i>';
                    break;
                case '7': var icon = '<i class="wi wi-rain-mix"></i>';
                    break;
                case '8': var icon = '<i class="wi wi-sprinkle"></i>';
                    break;
                case '9': var icon = '<i class="wi wi-sprinkle"></i>';
                    break;
                case '10': var icon = '<i class="wi wi-hail"></i>';
                    break;
                case '11': var icon = '<i class="wi wi-showers"></i>';
                    break;
                case '12': var icon = '<i class="wi wi-showers"></i>';
                    break;
                case '13': var icon = '<i class="wi wi-snow"></i>';
                    break;
                case '14': var icon = '<i class="wi wi-storm-showers"></i>';
                    break;
                case '15': var icon = '<i class="wi wi-snow"></i>';
                    break;
                case '16': var icon = '<i class="wi wi-snow"></i>';
                    break;
                case '17': var icon = '<i class="wi wi-hail"></i>';
                    break;
                case '18': var icon = '<i class="wi wi-hail"></i>';
                    break;
                case '19': var icon = '<i class="wi wi-cloudy-gusts"></i>';
                    break;
                case '20': var icon = '<i class="wi wi-fog"></i>';
                    break;
                case '21': var icon = '<i class="wi wi-fog"></i>';
                    break;
                case '22': var icon = '<i class="wi wi-fog"></i>';
                    break;
                case '23': var icon = '<i class="wi wi-cloudy-gusts"></i>';
                    break;
                case '24': var icon = '<i class="wi wi-cloudy-windy"></i>';
                    break;
                case '25': var icon = '<i class="wi wi-thermometer"></i>';
                    break;
                case '26': var icon = '<i class="wi wi-cloudy"></i>';
                    break;
                case '27': var icon = '<i class="wi wi-night-cloudy"></i>';
                    break;
                case '28': var icon = '<i class="wi wi-day-cloudy"></i>';
                    break;
                case '29': var icon = '<i class="wi wi-night-cloudy"></i>';
                    break;
                case '30': var icon = '<i class="wi wi-day-cloudy"></i>';
                    break;
                case '31': var icon = '<i class="wi wi-night-clear"></i>';
                    break;
                case '32': var icon = '<i class="wi wi-day-sunny"></i>';
                    break;
                case '33': var icon = '<i class="wi wi-night-clear"></i>';
                    break;
                case '34': var icon = '<i class="wi wi-day-sunny-overcast"></i>';
                    break;
                case '35': var icon = '<i class="wi wi-hail"></i>';
                    break;
                case '36': var icon = '<i class="wi wi-day-sunny"></i>';
                    break;
                case '37': var icon = '<i class="wi wi-thunderstorm"></i>';
                    break;
                case '38': var icon = '<i class="wi wi-thunderstorm"></i>';
                    break;
                case '39': var icon = '<i class="wi wi-thunderstorm"></i>';
                    break;
                case '40': var icon = '<i class="wi wi-storm-showers"></i>';
                    break;
                case '41': var icon = '<i class="wi wi-snow"></i>';
                    break;
                case '42': var icon = '<i class="wi wi-snow"></i>';
                    break;
                case '43': var icon = '<i class="wi wi-snow"></i>';
                    break;
                case '44': var icon = '<i class="wi wi-cloudy"></i>';
                    break;
                case '45': var icon = '<i class="wi wi-lightning"></i>';
                    break;
                case '46': var icon = '<i class="wi wi-snow"></i>';
                    break;
                case '47': var icon = '<i class="wi wi-thunderstorm"></i>';
                    break;
                case '3200': var icon = '<i class="wi wi-cloud"></i>';
                    break;
                default: var icon = '<i class="wi wi-cloud"></i>';
                    break;
            }

            return icon;

        }
    }
})();
