import { levelOne, levelTwo, levelThree } from "./data.js";

let card = document.querySelector('.card');
let button = document.querySelector('.draw');
let options = document.getElementById('deck')
let cur_deck = levelOne;

function drawCard(deck) {
    let randomCardIndex = Math.floor(Math.random() * deck.length);
    return deck[randomCardIndex];
}

function changeCardText(text) {
    card.textContent = text.toUpperCase();
}

function setCurDeck(event) {
    console.log(event.target.value)
    if (event.target.value == 'l1') {
        cur_deck = levelOne;
    } else if (event.target.value == 'l2') {
        cur_deck = levelTwo
    } else if (event.target.value == 'l3') {
        cur_deck = levelThree
    }
}

changeCardText(drawCard(cur_deck))
button.addEventListener("click", _ => changeCardText(drawCard(cur_deck)));
options.addEventListener("change", setCurDeck)