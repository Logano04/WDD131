import recipes from "./recipes.mjs";

console.log("whjqagdvjhsjjjAAAAAAAA");

function displayRecipe(recipe) {
    document.getElementById('recipe-name').textContent = recipe.name;
    document.getElementById('recipe-image').src = recipe.image;
    document.getElementById('recipe-image').alt = recipe.name;
    document.getElementById('recipe-author').textContent = `Author: ${recipe.author}`;
    document.getElementById('recipe-description').textContent = recipe.description;
}
displayRecipe(recipes[0]);