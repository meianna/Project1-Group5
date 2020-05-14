$(document).ready(function () {
  // $("#date").text(moment().format("LL"));
  // $("#time").text(moment().format("LT"));

  $.ajax({
    type: "GET",
    url: `http://newsapi.org/v2/top-headlines?country=us&apiKey=5f7ab4098d1e4689ac5bb49a9b806b47`,
    dataType: "json",
  }).then(function (res) {
    console.log(res);
    var j = 0;
    for (i = 0; i < 12; i++) {
      var title = res.articles[i].title;
      var link = res.articles[i].url;
      var image = res.articles[i].urlToImage;
      var source = res.articles[i].source.name;
      console.log(source);

      var card = `<div class="col-sm-6"> 
        <div class="card">
          <img src="${image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${source}</h5>
            <p class="card-text">${title}</p>
            <a target="_blank" href="${link}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>`;
      $(".newsContainer").append(card);
      // $("#newsLink").append(`<h5>${link}</h5>`);
    }
  });
});

// if ((i % 4 = 0)) {
// }
//
