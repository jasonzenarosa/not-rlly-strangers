import { levelOne, levelTwo, levelThree } from "./data.js";

let card = document.querySelector('.card');
let button = document.querySelector('.draw');
let options = document.getElementById('deck')
let cur_deck = levelOne;

function drawCard(deck) {
    let randomCardIndex = Math.floor(Math.random() * deck.length);
    return deck[randomCardIndex];
}

function changeCardText() {
    clearInterval(timer)
    var op = 0;
    card.style.opacity = 0
    card.textContent = drawCard(cur_deck).toUpperCase();
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            return
        }
        card.style.opacity = op;
        op *= 100;
        op += 1;
        op /= 100;
    }, 10);
}

function setCurDeck(event) {
    console.log(event.target.value);
    if (event.target.value == 'l1') {
        cur_deck = levelOne;
    } else if (event.target.value == 'l2') {
        cur_deck = levelTwo;
    } else if (event.target.value == 'l3') {
        cur_deck = levelThree;
    }
}

changeCardText(drawCard(cur_deck));
button.addEventListener("click", changeCardText);
options.addEventListener("change", setCurDeck);