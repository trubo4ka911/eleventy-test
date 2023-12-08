document.addEventListener("DOMContentLoaded", function () {
	// Task 1: 7 Times Table
	// Function to generate times table
	function generateTimesTable(number) {
		if (!number) return ""; // If number is not defined, return empty string

		let htmlContent = `<h3 class='title'>${number} Times Table</h3><ul class='times-table'>`;
		for (let i = 1; i <= 12; i++) {
			htmlContent += `<li>${number} x ${i} = ${number * i}</li>`;
		}
		htmlContent += "</ul>";
		return htmlContent;
	}

	// Event delegation to handle button clicks
	document
		.querySelector(".numbers-table-buttons")
		.addEventListener("click", function (event) {
			if (event.target.classList.contains("btn-numbers-table")) {
				const number = parseInt(event.target.getAttribute("data-number"), 10); // Convert the number to an integer
				document.getElementById("timesTableOutput").innerHTML =
					generateTimesTable(number);
			}
		});

	// Task 2: List Favourite Foods
	const favouriteFoods = ["Pizza", "Pasta", "Ice Cream", "Sushi"];
	function listFavouriteFoods() {
		let htmlContent =
			"<h2 class='title'>My Favourite Foods</h2><ul class='food-list'>";
		favouriteFoods.forEach((food) => {
			htmlContent += `<li>${food}</li>`;
		});
		return htmlContent + "</ul>";
	}

	// Task 4: Favourite Recipe Object
	const favouriteRecipe = {
		title: "Spaghetti Carbonara",
		ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan Cheese"],
		directions: [
			"Boil pasta",
			"Fry bacon",
			"Mix eggs and cheese",
			"Combine everything",
		],
	};

	function displayFavouriteRecipe() {
		let htmlContent = `<h2 class='title'>My Favourite Recipe: ${favouriteRecipe.title}</h2><ul class='recipe-details'>`;
		htmlContent += "<h3>Ingredients</h3>";
		favouriteRecipe.ingredients.forEach((ingredient) => {
			htmlContent += `<li>${ingredient}</li>`;
		});
		htmlContent += "</ul><h3>Directions</h3><ol>";
		favouriteRecipe.directions.forEach((step) => {
			htmlContent += `<li>${step}</li>`;
		});
		return htmlContent + "</ol>";
	}

	// Task 5: Let's Cook Function
	function letsCook() {
		return `<button class='cook-btn'>I'm hungry! Let's cook ${favouriteRecipe.title}.</button>`;
	}

	// Insert the generated HTML into the page
	const tasksOutput = document.getElementById("tasksOutput");
	if (tasksOutput) {
		tasksOutput.innerHTML =
			generateTimesTable() +
			listFavouriteFoods() +
			displayFavouriteRecipe() +
			letsCook();
	}
});
