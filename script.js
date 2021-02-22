var wrapperEle = document.body.querySelector(".wrapper");
var wrapperEle2 = document.body.querySelector(".wrapper2");
var wrapperEle3 = document.body.querySelector(".wrapper3");
var wrapperEle4 = document.body.querySelector(".wrapper4");
var buttonEle = document.body.querySelector(".button");

var miles = Number(
  prompt("What is the estimate number of miles per year you use?")
);
var gas = Number(
  prompt("What is the current price of a gallon of gas in your area?")
);
var mpg1 = 12;
var mpg2 = 17;
var mpg3 = 26;
var mpg4 = 29;

function calculations(mpg, element) {
  var answer = (miles / mpg) * gas;
  element.innerHTML =
    "To drive a car with an MPG rating of " +
    mpg +
    " for " +
    miles +
    " miles at " +
    gas +
    " per gallon would cost $" +
    answer +
    " per year.";
}

calculations(mpg1, wrapperEle);
calculations(mpg2, wrapperEle2);
calculations(mpg3, wrapperEle3);
calculations(mpg4, wrapperEle4);

buttonEle.addEventListener("click", function () {
  calculations();
});