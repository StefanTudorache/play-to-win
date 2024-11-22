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
        <p class="deck-stock">Stock: <span>In stock</span></p>
        <p class="deck-description">${deck.description}
        </p>
        
        <button class="add-to-cart-button">Adaugă în coș</button>
      </div>
    </div>
  `;

  // const addToCartButton = document.querySelectorAll(".add-to-cart-button");
  // addToCartButton.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     const deckId = button.getAttribute("data-deckId");
  //     const name = button.getAttribute("data-name");
  //     const price = Number(button.getAttribute("data-price"));
  //     const imageURL = button.getAttribute("data-image");
  //     const quantityAvailableOnStock = Number(
  //       button.getAttribute("data-quantity")
  //     );
  //     let cart = JSON.parse(localStorage.getItem("cart")) || {};
  //     if (cart[deckId]) {
  //       cart[deckId].quantity++;
  //     } else {
  //       cart[deckId] = {
  //         quantity: 1,
  //         price: price,
  //         image: imageURL,
  //         name: name,
  //         quantityAvailableOnStock: quantityAvailableOnStock,
  //       };
  //     }

  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   });
  // });
}
