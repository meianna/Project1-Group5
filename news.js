$(document).ready(function () {
  // $("#date").text(moment().format("LL"));
  // $("#time").text(moment().format("LT"));

  $.ajax({
    type: "GET",
    url: `http://newsapi.org/v2/top-headlines?country=us&apiKey=5f7ab4098d1e4689ac5bb49a9b806b47`,
    dataType: "json",
  }).then(function (res) {
    console.log(res);
    for (i = 3; i < 6; i++) {
      var title = res.articles[i].title;
      var link = res.articles[i].url;
      var image = res.articles[i].urlToImage;
      var source = res.articles[i].source.name;
      console.log(source);
      var card = `<div class="card" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${source}</h5>
      <p class="card-text">${title}</p>
      <a href="${link}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
      $("#newsTitle").append(`<h3>${card}</h3>`);
      // $("#newsLink").append(`<h5>${link}</h5>`);
    }
  });
});
