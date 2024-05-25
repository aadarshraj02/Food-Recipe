const searchBox = document.querySelector(".searchBox");
const recipeContainer = document.querySelector(".recipe-container");
const searchBtn = document.querySelector(".searchBtn");

const fetchRecipes = async (query) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const data = await fetch(url);
  const response = await data.json();
  //   console.log(response);
  response.meals.forEach((meal) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
        <img src = "${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
    `;
    recipeContainer.appendChild(recipeDiv);
  });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  fetchRecipes(searchInput);
});
