const year = 2025;
const pi = 3.14159265358979323846;
usd = 41.5;
eur = 46.9;

const btn = document.getElementById("btn");
btn.onclick = main;

function greetUser() {
  const name = prompt("Enter your name: ");
  alert("Hello, " + name);
}

function calculateAge() {
  const age = year - prompt("Enter your birth year: ");
  if (age > 20) {
    alert("You are " + age + " years old adult");
  }
  else {
    alert("You are " + age + " years old teenager");
  }
}

function calculateSquarePerimeter() {
  const squareSide = prompt("Enter the length of the square side: ");
  const squarePerimeter = squareSide * 4;
  alert("The perimeter of the square is: " + squarePerimeter);
}

function calculateCircleArea() {
  const radius = prompt("Enter the radius of the circle: ");
  const circleArea = pi * radius * 2;
  alert("The area of the circle is: " + circleArea);
}

function calculateTravelSpeed() {
  const distance = prompt("Enter the distance between Kyiv and Odesa: ");
  const time = prompt("Enter how much time you want to spend: ");
  const speed = distance / time;
  alert("The speed you need to travel is: " + speed.toFixed(2) + " km/h");
}

function convertUsdToEur() {
  const usdToEur = prompt("Enter the amount in USD: ");
  const usdToEurRate = usd / eur;
  const usdToEurResult = usdToEur * usdToEurRate;
  alert("The amount in EUR is: " + usdToEurResult.toFixed(2));
}

function main() {
  greetUser();
  calculateAge();
  calculateSquarePerimeter();
  calculateCircleArea();
  calculateTravelSpeed();
  convertUsdToEur();
}