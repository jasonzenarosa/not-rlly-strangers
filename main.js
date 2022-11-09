let card = document.querySelector('.card');
let button = document.querySelector('.draw');
let options = document.getElementById('deck')
let cur_deck = 'level1';


async function drawCard() {
    let response = await fetch(`https://not-rlly-strangers-api.herokuapp.com//${cur_deck}`)
    let cardContent = await response.json()
    card.textContent = cardContent.card.toUpperCase()
}

function setCurDeck(event) {
    cur_deck = event.target.value
}

drawCard()
button.addEventListener("click", drawCard);
options.addEventListener("change", setCurDeck);