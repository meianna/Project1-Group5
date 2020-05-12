<<<<<<< HEAD
const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
  single_mealEl.innerHTML = '';

  // Get search term
  const term = search.value;

  // Check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        resultHeading.innerHTML = `<br><h1 style="color: green;">Search results for '${term}':</h1>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                

                
              </div>
              <h5>${meal.strMeal}</h5>
            </div>
          `
            )
            .join('');
        }
      });
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search term');
  }
}

// Fetch meal by ID
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}

// Fetch random meal from API
function getRandomMeal() {
  // Clear meals and heading
  mealsEl.innerHTML = '';
  resultHeading.innerHTML = '';

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}

// Add meal to DOM
function addMealToDOM(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Event listeners
submit.addEventListener('submit', searchMeal);
random.addEventListener('click', getRandomMeal);

mealsEl.addEventListener('click', e => {
  const mealInfo = e.path.find(item => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });

  if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealid');
    getMealById(mealID);
  }
});
=======
// Function for date/time header
$(document).ready(function () {
  $("#date").text(moment().format("LL"));
  $("#time").text(moment().format("LT"));
});

// Function for random movie generator
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
      $("#title").text(res.Title);
      $("#year").text(res.Year);
      $("#genre").text(res.Genre);
      $("#runtime").text(res.Runtime);
      $("#poster").append(`<img src=${res.Poster}/>`);
    });
  });
});
>>>>>>> 7bcef3d90114e4b74bc920fab75f103a4ac5499b
