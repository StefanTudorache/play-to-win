import { getDeckById } from "./api/decks.js";
document.addEventListener("DOMContentLoaded", showDeckDetails);

async function showDeckDetails() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const deckId = urlSearchParams.get("id");

  const deck = await getDeckById(deckId);
  document.querySelector(
    ".content"
  ).innerHTML = ` <div class="deck-card-details">
      <div class="deck-images">
        <div class="top-image">
          <img
            src="${deck.imageURL}"
            alt="Imagine 1"
          />
        </div>

        <div class="deck-bottom-images">
          <img
            src="${deck.imageURL2}"
            alt="Imagine 2"
          />
          <img
            src="${deck.imageURL3}"
            alt="Imagine 3"
          />
        </div>
      </div>
      <div class="deck-details">
        <h2 class="deck-name">${deck.name}</h2>
        <p class="deck-price">Price: ${deck.price} RON</p>
        <p class="deck-description">${deck.description}
        </p>
        <p class="deck-stock">Stock: <span>In stock</span></p>
        <button class="add-to-cart-button">Adaugă în coș</button>
      </div>
    </div>
  `;
}
