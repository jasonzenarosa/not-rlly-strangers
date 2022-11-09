let card = document.querySelector('.card');
let button = document.querySelector('.draw');
let options = document.getElementById('deck')
let cur_deck = 'level1';


function drawCard() {
    fetch(`https://not-rlly-strangers-api.herokuapp.com//${cur_deck}`)
    .then(response => response.json())
    .then(json => card.textContent = json.card.toUpperCase())
}

function setCurDeck(event) {
    cur_deck = event.target.value
}

drawCard()
button.addEventListener("click", drawCard);
options.addEventListener("change", setCurDeck);