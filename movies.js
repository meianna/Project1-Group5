// Function for random movie generator
$(document).ready(function () {
  var apiKey = "9cd3d4af";
  var movies = [
    "Parasite",
    "Argo",
    "The King's Speech",
    "The Hurt Locker",
    "Slumbdog Millionaire",
    "Titanic",
    "The Silence of the Lambs",
    "Rain Main",
    "One Flew Over the Cuckoo's Nest",
    "The Sting",
    "The Godfather",
    "The Sound of Music",
    "Stand By Me",
    "Raging Bull",
    "Good Will Hunting",
    "Arrival",
    "Lost in Translation",
    "The Princess Bride",
    "The Terminator",
    "No Country For Old Men",
    "Predator",
    "Raiders of the Lost Ark",
    "Rocky",
    "The Social Network",
    "Spirited Away",
    "Toy Story",
    "A Clockwork Orange",
    "Fargo",
    "Seven Samurai",
    "Hot Fuzz",
    "Finding Nemo",
    "Ghostbusters",
    "Lion",
    "Star Wars",
    "La La Land",
    "Forrest Gump",
    "Inglorious Basterds",
    "Whiplash",
    "Reservoir Dogs",
    "Psycho",
    "It's A Wonderful Life",
    "Drive",
    "Saving Private Ryan",
    "Mad Max: Fury Road",
    "The Shining",
    "Taxi Driver",
    "The Big Lebowski",
    "The Matrix",
    "Apocalypse Now",
    "2001: A Space Odyssey",
    "Die Hard",
    "Jurassic Park",
    "Inception",
    "Back To The Future",
    "Jaws",
    "Pulp Fiction",
    "The Shawshank Redemption",
    "The Dark Knight",
    "Moonlight",
    "The Big Short",
    "The Grand Budapest Hotel",
    "The Wolf of Wall Street",
    "The Help",
    "The Descendants",
    "Midnight in Paris",
    "Black Swan",
    "District 9",
    "Up",
    "Avatar",
    "Little Miss Sunshine",
    "Moonrise Kingdom",
    "Fast Times at Ridgemont High",
    "Requiem for a Dream",
    "Clueless",
    "Mean Girls",
    "Fight Club",
    "Scarface",
    "Lethal Weapon",
    "Wayne's World",
    "John Wick",
    "The Sixth Sense",
    "Superbad",
    "Brokeback Mountain",
    "Akira",
    "Shrek",
    "The Breakfast Club",
    "Robocop",
    "Edward Scissorhands",
    "Bridesmaids",
    "Crazy Rich Asians",
    "Zero Dark Thirty",
    "Catch Me If You Can",
    "Sleepless in Seattle",
    "Public Enemies",
    "Apollo 13",
    "Cast Away",
    "Django Unchained",
    "Dead Poets Society",
    "Million Dollar Baby",
    "Ferris Bueller's Day Off",
    "Home Alone",
    "Monsters, Inc.",
    "Grease",
    "The Birds",
    "A Few Good Men",
  ];

  $("#submitBtn").on("click", function (e) {
    e.preventDefault();

    var randomNumber = Math.floor(Math.random() * movies.length);
    var randomMovie = movies[randomNumber];

    $.ajax({
      type: "GET",
      url: `https://www.omdbapi.com/?apikey=${apiKey}&t=${randomMovie}`,
      dataType: "json",
    }).then(function (res) {
      console.log(res);

      // movie info
      $("#title").text(res.Title);
      $("#year").text(`Year: ${res.Year}`);
      $("#rated").text(`Rated: ${res.Rated}`);
      $("#genre").text(`Genre: ${res.Genre}`);
      $("#runtime").text(`Runtime: ${res.Runtime}`);

      // ratings info
      $("#imdbRating").text(res.Ratings[0].Value);
      $("#imdb").text("IMDB");
      $("#rottenTomatoesRating").text(res.Ratings[1].Value);
      $("#rottenTomatoes").text(res.Ratings[1].Source);
      $("#metacriticRating").text(res.Ratings[2].Value);
      $("#metacritic").text(res.Ratings[2].Source);

      // movie poster image
      $("#poster").html(`<img src=${res.Poster}/>`);

      // plot description
      $("#plot").text(res.Plot);

      // prepending search history
      $("#searchHistory").prepend(`<tr><td class="btn">${res.Title}</td></tr>`);
    });
  });

  $(document).on("click", ".btn", function () {
    var text = $(this).text();
    $.ajax({
      type: "GET",
      url: `https://www.omdbapi.com/?apikey=${apiKey}&t=${text}`,
      dataType: "json",
    }).then(function (res) {
      console.log(res);

      // movie info
      $("#title").text(res.Title);
      $("#year").text(`Year: ${res.Year}`);
      $("#rated").text(`Rated: ${res.Rated}`);
      $("#genre").text(`Genre: ${res.Genre}`);
      $("#runtime").text(`Runtime: ${res.Runtime}`);

      // ratings info
      $("#imdbRating").text(res.Ratings[0].Value);
      $("#imdb").text("IMDB");
      $("#rottenTomatoesRating").text(res.Ratings[1].Value);
      $("#rottenTomatoes").text(res.Ratings[1].Source);
      $("#metacriticRating").text(res.Ratings[2].Value);
      $("#metacritic").text(res.Ratings[2].Source);

      // plot description
      $("#plot").text(res.Plot);

      // movie poster image
      $("#poster").html(`<img src=${res.Poster}/>`);
    });
  });
});
