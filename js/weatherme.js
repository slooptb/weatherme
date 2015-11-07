
// getLocation() using HTML5 geolocation & call showWeather()

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            showWeather(pos.coords.latitude+','+pos.coords.longitude);
        });
    } else {
        console.log("You need to enable location services to use, or get a better browser!");
    }
}

// showWeather() uses simpleWeatherjs.com jQuery plugin
function showWeather(location) {
    $.simpleWeather({
        location: location,
        unit: 'f',
        success: function(weather) {

            // Set variables with local data...
            loc = weather.city+", "+weather.region+" "+weather.country;
            tempF = weather.temp+'&deg;'+weather.units.temp;
            currently = weather.currently;

            $("#temp").html(tempF);
            $("#location").text(loc);
            $("#currently").text(currently);
            $("#latlon").text(location);

        },
        error: function(error) {
            $("#location").html('<p>'+error+'</p>');
        }
    });
}

$(document).ready(function() {
    getLocation();
});