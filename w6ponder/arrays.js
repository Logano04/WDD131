const steps = ["one", "two", "three"];
const fruits = ["watermelon", "apple", "tomato", "grape"];
const numbers = [12, 34, 21, 54]
let luckyNumber = 21;

function listTemplate(step) {
  return `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
//document.querySelector("#myList").innerHTML =  stepsHtml.join(""); //

const letterGrades = ['A', 'B', 'C', 'A'];
function convertGrade(letterGrade) {
    let point = 0;
    if(letterGrade === 'A'){
        point = 4;
    } else if (letterGrade === 'B'){
        point = 3;
    } else if (letterGrade === 'C'){
        point = 2;
    }
    return point;
}

const gpaPoints = letterGrades.map(convertGrade);

const total = gpaPoints.reduce((total, item) => {
    return total + item;
}, 0); //0 is our starting value
const gpa = total / letterGrades.length;

console.log(gpa);

const filteredFriuts = fruits.filter((fruit) => {
    return fruit.length > 6;
});

console.log(filteredFriuts);

if (numbers.indexOf(luckyNumber) >= 0) {
    console.log("your number is here");
}
