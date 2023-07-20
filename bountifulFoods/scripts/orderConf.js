import data from "../fruit.json" assert { type: 'json' };

let url = new URL(window.location);
let params  = url.searchParams;

// populate the fields
document.querySelector('#yourname').textContent = params.get("fname");
document.querySelector('#youremail').textContent = params.get("email");
document.querySelector('#yourcell').textContent = params.get("cell");

var fruits = [];
var fruitUL = document.querySelector("#yourfruits");
if (params.get("f1")) {
    fruits.push(params.get("f1"));
}
if (params.get("f2")) {
    fruits.push(params.get("f2"));
}
if (params.get("f3")) {
    fruits.push(params.get("f3"));
}
fruits.forEach(fruit => {
    var fruitLI = document.createElement("li");
    fruitLI.innerHTML = fruit;
    fruitUL.appendChild(fruitLI);
});

document.querySelector("#yourinstructions").textContent = params.get("sp-instr");

// populate the nutrition facts
var carbohydrates = 0;
var protein = 0;
var fat = 0;
var sugar = 0;
var calories = 0;
fruits.forEach(fruit => {
    for (var i = 0; i < data.length; i++) {
        if (data[i].name == fruit) {
            carbohydrates += data[i].nutritions.carbohydrates;
            protein += data[i].nutritions.protein;
            fat += data[i].nutritions.fat;
            sugar += data[i].nutritions.sugar;
            calories += data[i].nutritions.calories;
        }
    }
});
document.querySelector("#yourcarbs").textContent = carbohydrates.toFixed(1).toString() + "g";
document.querySelector("#yourprotein").textContent = protein.toFixed(1).toString() + "g";
document.querySelector("#yourfat").textContent = fat.toFixed(1).toString() + "g";
document.querySelector("#yoursugar").textContent = sugar.toFixed(1).toString() + "g";
document.querySelector("#yourcalories").textContent = calories.toFixed(0).toString();

// populate the pickup time
var pickupTime = document.querySelector("#pickup-time");
var date = new Date();
console.log(date.getTime());

// populate the order date
var orderedOn = document.querySelector("#ordered-on");
var rawDate = params.get("date-and-time");
var date = new Date(rawDate);
console.log(rawDate);
console.log(date);
var month = date.getMonth();
var day = date.getDay();
var year = date.getYear();
orderedOn.innerHTML = `${month}/${day}/${year}`;

// increment smoothie orders count
document.querySelector("#confirm-order").addEventListener("click", () => {
    var prevAmt = window.localStorage.getItem("userOrders");
    window.localStorage.setItem("userOrders", Number(prevAmt) + 1);
});