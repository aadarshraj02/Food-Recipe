const searchBox = document.querySelector(".searchBox");
const recipeContainer = document.querySelector(".recipe-container");
const searchBtn = document.querySelector(".searchBtn");

const fetchRecipes = async (query) => {
  recipeContainer.innerHTML = "Fetching Recipes...";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const data = await fetch(url);
  const response = await data.json();
  //   console.log(response);

  recipeContainer.innerHTML = "";
  response.meals.forEach((meal) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
        <img src = "${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p>Belongs to <span>${meal.strCategory}</span> Category</p>
    `;
    const button = document.createElement("button")
    button.innerHTML = "View Recipe"
    recipeDiv.appendChild(button)
    recipeContainer.appendChild(recipeDiv);
  });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  fetchRecipes(searchInput);
});
