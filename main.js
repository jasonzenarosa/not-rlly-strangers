import { levelOne, levelTwo, levelThree } from "./data.js";

function drawCard(deck) {
    let randomCardIndex = Math.floor(Math.random() * deck.length);
    return deck[randomCardIndex];
}

console.log(drawCard(levelOne));
// console.log(drawCard(levelTwo));
// console.log(drawCard(levelThree));
