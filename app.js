// Function for date/time header
$(document).ready(function () {
  $("#date").text(moment().format("LL"));
  $("#time").text(moment().format("LT"));

  $.ajax({
    type: "GET",
    url: `http://newsapi.org/v2/top-headlines?country=us&apiKey=5f7ab4098d1e4689ac5bb49a9b806b47`,
    dataType: "json",
  }).then(function (res) {
    console.log(res);
    for (i = 0; i < 5; i++) {
      var title = res.articles[i].title;
      $("#newsResults").append(`<h5>${title}</h5>`);
    }
  });

  var api_key_kenny = "6dbe43cb883ce8ea55cc9545b5f2cea3";

  var x = document.getElementById("demo");

  getLocation();

  var x = $("#demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.html("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;

    console.log(lat);
    console.log(lon);

    $.ajax({
      type: "GET",
      // url: `api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=${api_key}`,
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key_kenny}`,
      // lat=35&lon=139
      dataType: "json",
      success: function (res) {
        console.log(res);
        console.log(res.name);
        console.log(res.main.temp);

        var kelvinTemp = parseFloat(res.main.temp);
        // console.log(kelvinTemp);
        var farenTemp = (kelvinTemp - 273.15) * 1.8 + 32;

        console.log(res.main.humidity);
        var weatherIcon = res.weather[0].icon;
        var currentHumidity = res.main.humidity;
        var cityName = res.name;
        var currentTemp = parseInt(farenTemp);

        var iconUrl =
          "https://openweathermap.org/img/wn/" + weatherIcon + ".png";

        $("#currentHumidity").text(`Humidity: ${currentHumidity}`);
        $("#weather-icon").attr("src", `${iconUrl}`);
        $("#cityName").text(`${cityName}`);
        $("#currentTemp").text(`${currentTemp}º`);
      },
    });
  }
});
