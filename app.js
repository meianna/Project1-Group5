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
});
