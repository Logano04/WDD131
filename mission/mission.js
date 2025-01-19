const body = document.body;
const image = document.getElementById("BYU-I-logo");
const themeSelector = document.getElementById("theme-select");

function changeTheme() {
    console.log("Selected value:", themeSelector.value);
    let currentTheme = themeSelector.value
        if (currentTheme == "dark") {
            body.classList.add("dark")
            image.src = "images/byui-logo_white.png"
        } else {
            body.classList.remove("dark")
            image.src = "images/byui-logo_blue.webp"
        }
  }
themeSelector.addEventListener('change', changeTheme);