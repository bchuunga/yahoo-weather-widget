$(document).ready(function () {
    getWeatherDemo();
});

function getWeatherDemo() {
    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
        'where woeid in (select woeid from geo.places(1) where text="Tampa")&format=json', function (data) {
            console.log(data);
            alert("The temperatute in Tampa is " +
                data.query.results.channel.item.condition.temp +
                data.query.results.channel.units.temperature
            );
        });
}