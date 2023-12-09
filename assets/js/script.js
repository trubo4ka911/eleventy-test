document.addEventListener("DOMContentLoaded", () => {
  
  const generateTimesTable = (number) => {
    if (!number) return '';
    return `
      <h3 class='title'>${number} Times Table</h3>
      <ul class='times-table'>
        ${Array.from({ length: 12 }, (_, i) => `<li>${number} x ${i + 1} = ${number * (i + 1)}</li>`).join('')}
      </ul>
    `;
  };

  const listFavouriteFoods = (foods) => `
    <h2 class='title'>My Favourite Foods</h2>
    <ul class='food-list'>
      ${foods.map(food => `<li>${food}</li>`).join('')}
    </ul>
  `;

  const displayFavouriteRecipe = (recipe) => `
    <h2 class='title'>My Favourite Recipe: ${recipe.title}</h2>
    <h3>Ingredients</h3>
    <ul class='recipe-details'>
      ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <h3>Directions</h3>
    <ol>
      ${recipe.directions.map(step => `<li>${step}</li>`).join('')}
    </ol>
  `;

  const letsCook = (recipeTitle) => `
    <button class='cook-btn'>I'm hungry! Let's cook ${recipeTitle}.</button>
  `;

  document.querySelector(".numbers-table-buttons").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-numbers-table")) {
      const number = parseInt(event.target.dataset.number, 10);
      document.getElementById("timesTableOutput").innerHTML = generateTimesTable(number);
    }
  });

  const favouriteFoods = ["Pizza", "Pasta", "Ice Cream", "Sushi"];
  const favouriteRecipe = {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan Cheese"],
    directions: ["Boil pasta", "Fry bacon", "Mix eggs and cheese", "Combine everything"]
  };

  const tasksOutput = document.getElementById("tasksOutput");
  tasksOutput.innerHTML = `
    ${listFavouriteFoods(favouriteFoods)}
    ${displayFavouriteRecipe(favouriteRecipe)}
    ${letsCook(favouriteRecipe.title)}
  `;
});
