(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    function dataservice() {
        var isPrimed = false;
        var primePromise;

        var service = {
            getWeather: getWeather
        };

        function getWeather(success, failure) {
            var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
                      'where woeid in (select woeid from geo.places(1) where text="Tampa")&format=json';

            $.ajax({
                url: url,
                method: "GET",
                headers: { "Accept": "application/json" },
                success: function (data) {
                    success(data);
                },
                error: function (data) {
                    failure(JSON.stringify(data.error));
                }
            });
        }

        return service;
    }
})();