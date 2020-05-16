$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://api.covid19api.com/summary",
    dataType: "json",
  }).then(function (res) {
    console.log(res);

    // global stats
    var newConfirmed = res.Global.NewConfirmed;
    var totalConfirmed = res.Global.TotalConfirmed;
    var newRecovered = res.Global.NewRecovered;
    var totalRecovered = res.Global.TotalRecovered;

    $("#covidGlobal").append(`<p>New Confirmed: <b>${newConfirmed}</b></p>`);
    $("#covidGlobal").append(
      `<p>Total Confirmed: <b>${totalConfirmed}</b></p>`
    );
    $("#covidGlobal").append(`<p>New Recovered: <b>${newRecovered}</b></p>`);
    $("#covidGlobal").append(
      `<p>Total Recovered: <b>${totalRecovered}</b></p>`
    );

    // US stats
    var newConfirmedUSA = res.Countries[177].NewConfirmed;
    var totalConfirmedUSA = res.Countries[177].TotalConfirmed;
    var newRecoveredUSA = res.Countries[177].NewRecovered;
    var totalRecoveredUSA = res.Countries[177].TotalRecovered;

    $("#covidUSA").append(`<p>New Confirmed: <b>${newConfirmedUSA}</b></p>`);
    $("#covidUSA").append(
      `<p>Total Confirmed: <b>${totalConfirmedUSA}</b></p>`
    );
    $("#covidUSA").append(`<p>New Recovered: <b>${newRecoveredUSA}</b></p>`);
    $("#covidUSA").append(
      `<p>Total Recovered: <b>${totalRecoveredUSA}</b></p>`
    );
  });
});
