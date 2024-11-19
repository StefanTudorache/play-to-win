const URL = "https://6734f7475995834c8a91885f.mockapi.io/api/decks";
const decksContainer = document.querySelector(".decks");
document.addEventListener("DOMContentLoaded", displayDecks);

function displayDecks() {
  fetch(URL)
    .then((response) => response.json())
    .then(
      (decks) =>
        (decksContainer.innerHTML = decks.map(
          (decks) => `
    <div class="deck-card back">
      <div class="top-block">
        <img
          src= ${decks.imageURL}
          alt=""
          class="deck-card-logo"
        />
      </div>
      <div class="bottom-block">
        <h3>${decks.name}</h3>
        <p>${decks.price} RON</p>
        <button>Adauga in cos</button>
      </div>
    </div>`
        ))
    );
}
