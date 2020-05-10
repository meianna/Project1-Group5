$(document).ready(function () {
  $("#submitBtn").on("click", function (e) {
    e.preventDefault();

    var apiKey = "9cd3d4af";
    var movies = [
      "Citizen Kane",
      "Casablanca",
      "The Godfather",
      "Gone with the Wind",
      "Lawrence of Arabia",
      "The Wizard of Oz",
      "The Graduate",
      "Schindler's List",
      "Singin' in the Rain",
      "It's a Wonderful Life",
      "The Bridge on the River Kwai",
      "Star Wars",
      "The African Queen",
      "Psycho",
      "One Flew Over The Cuckoo's Nest",
      "The Grapes of Wrath",
      "2001: A Space Odyssey",
      "The Maltese Falcon",
      "Raging Bull",
      "E.T. The Extra-Terrestrial",
      "Dr. Strangelove",
      "Mr. Smith Goes to Washington",
      "The Godfather Part II",
      "To Kill a Mockingbird",
      "Midnight Cowboy",
      "North by Northwest",
      "West Side Story",
      "King Kong",
      "A Streetcar Named Desire",
      "A Clockwork Orange",
      "Taxi Driver",
      "Jaws",
      "Amadeus",
      "All Quiet on the Western Front",
      "The Soud of Music",
      "The Third Man",
      "Fantasia",
      "Rebel Without a Cause",
      "Apocalypse Now",
      "Raiders of tnohe Lost Ark",
      "Vertigo",
      "Tootsie",
      "Close Encounters of the Third Kind",
      "The Silence of the Lambs",
      "The Manchurian Candidate",
      "An American in Paris",
      "Forrest Gump",
      "Ben-Hur",
      "Wuthering Heights",
      "Dances with Wolves",
      "Rocky",
      "The Deer Hunter",
      "The Wild Bunch",
      "Platoon",
      "Fargo",
      "Mutiny on the Bounty",
      "Frankenstein",
      "Easy Rider",
      "Goodfellas",
      "Pulp Fiction",
      "Bringing Up Baby",
      "Unforgiven",
      "Guess Who's Coming to Dinner",
      "Yankee Doodle Dandy",
    ];
    var randomNumber = Math.floor(Math.random() * movies.length);
    var randomMovie = movies[randomNumber];

    $.ajax({
      type: "GET",
      url: `https://www.omdbapi.com/?apikey=${apiKey}&t=${randomMovie}`,
      dataType: "json",
    }).then(function (res) {
      console.log(res.Poster);

      $("#title").text(res.Title);
      $("#year").text(res.Year);
      $("#genre").text(res.Genre);
      $("#runtime").text(res.Runtime);
      $("#poster").append(`<img src=${res.Poster}/>`);
    });
  });
});
