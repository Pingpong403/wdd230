import data from "../fruit.json" assert { type: 'json' };

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

var size = data.length;
var fruit;
var fruits = [];
var rand_i;
var chosen_i = [];
for (var i = 0; i < 3; i++) {
    // get a random fruit
    do {
        rand_i = getRandomInt(0, size);
    } while (chosen_i.includes(rand_i))

    fruit = data[rand_i];

    // add it to the list
    fruits.push(fruit.name);

    // make sure we don't pick it again
    chosen_i.push(rand_i);
}

// populate the buttons
var f1 = document.querySelector("#f1");
var f2 = document.querySelector("#f2");
var f3 = document.querySelector("#f3");
var fruit1 = document.querySelector("#fruit1");
var fruit2 = document.querySelector("#fruit2");
var fruit3 = document.querySelector("#fruit3");

f1.value = fruits[0];
f2.value = fruits[1];
f3.value = fruits[2];
fruit1.append(` ${fruits[0]}`);
fruit2.append(` ${fruits[1]}`);
fruit3.append(` ${fruits[2]}`);