import { levelOne, levelTwo, levelThree } from "./data.js";

let card = document.querySelector('.card');
let button = document.querySelector('.draw')

function drawCard(deck) {
    let randomCardIndex = Math.floor(Math.random() * deck.length);
    return deck[randomCardIndex];
}

function changeCardText(text) {
    card.textContent = text.toUpperCase();
}

changeCardText(drawCard(levelOne))
button.addEventListener("click", _ => changeCardText(drawCard(levelOne)));