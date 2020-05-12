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
    "2001: A Space Osyssey",
    "Die Hard",
    "Jurassic Park",
    "Inception",
    "Fight Club",
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
      $("#title").text(res.Title);
      $("#year").text(res.Year);
      $("#genre").text(res.Genre);
      $("#runtime").text(res.Runtime);
      $("#poster").html(`<img src=${res.Poster}/>`);
    });
  });
});
