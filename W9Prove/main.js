import recipes from "./recipes.mjs";
let recipesContainer = document.getElementById("recipes-container");

document.getElementById("searchButton").addEventListener("click", function() {
    let search = document.getElementById
    ("searchBar").value;
    let searchResults = recipes.filter(recipe => recipe.name.toLowerCase().includes(search.toLowerCase()) || 
    recipe.description.toLowerCase().includes(search.toLowerCase()) || 
    convertArrayToLowercase(recipe.tags).includes(search.toLowerCase()));
    searchResults.forEach(recipe => console.log(recipe.name)
    )
    for (let i = 0; i < searchResults.length; i++) {
        displayRecipe(searchResults[i]);
        console.log(searchResults[i]);
    }
    recipesContainer.innerHTML = "";
    searchResults.forEach(recipe => {
        displayRecipe(recipe);
    });
}
)
function convertArrayToLowercase(array) {
    return array.map(element => element.toLowerCase());
}
function getRandomIndex(maxNum) {
    return Math.floor(Math.random() * maxNum);
}
function recipeTemplate(recipe) {
	return `<section class="recipe">
                <img id="recipe-image" src=${recipe.image} alt="Recipe Image">
                <div name="recipe-info">
                    <h1 id="recipe-name">${recipe.name}</h1>
                    <span id="tags-container">
                        <a>${tagsTemplate(recipe.tags)}</a>
                    </span>
                    <span
                        class="rating"
                        role="img"
                        aria-label="Rating: 4 out of 5 stars">
                        ${ratingTemplate(recipe.rating)}
                    </span>
                    <p id="recipe-author"> ${recipe.author}</p>
                    <p class="recipeDescription" id="recipe-description">${recipe.description}</p>
                </div>
            </section>`
}

function tagsTemplate(tags) {
    console.log(tags);
    let html = "";
    for (let i = 0; i < tags.length; i++) {
        html += `<span class="tag">${tags[i]}, </span>`
    }
	return html;

}
function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
	html += `</span>`
	return html
}

function displayRecipe(recipe) {
    const myHTML = recipeTemplate(recipe);
    recipesContainer.insertAdjacentHTML("beforeend", myHTML);
}
function init() {
    displayRecipe(recipes[getRandomIndex(recipes.length)]);
}

console.log(getRandomIndex(recipes.length));
init();