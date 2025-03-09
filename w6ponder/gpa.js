let button = document.getElementById("myButton");
let inputValue = "";
let grades = [];

function getGrades() {
    inputValue = document.getElementById("grades").value;
    grades = inputValue.split(",");
    console.log(grades);
}

function lookupGrade(grade) {
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } else if (grade === "C") {
        points = 2;
    } else if (grade === "D") {
        points = 1;
    }
    return points;
  }
  
function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
  }
  
function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
  }
  
button.addEventListener("click", clickHandler);

function clickHandler() {
  console.log("Button clicked");
  // when the button in our html is clicked:
  getGrades(); // get the grades entered into the input
  console.log(inputValue);
  // calculate the gpa from the grades entered
  // display the gpa
}