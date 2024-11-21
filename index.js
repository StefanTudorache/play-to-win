import { getAllDecks } from "./api/decks.js";
import { mapDeckToCard } from "./utils/layout.js";

const URL = "https://6734f7475995834c8a91885f.mockapi.io/api/decks";
const decksContainer = document.querySelector(".decks");
document.addEventListener("DOMContentLoaded", displayDecks);

async function displayDecks() {
  const decks = await getAllDecks();
  decksContainer.innerHTML = decks.map(mapDeckToCard).join("");

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const deckId = button.getAttribute("data-deckId");
      const name = button.getAttribute("data-name");
      const price = Number(button.getAttribute("data-price"));
      const imageURL = button.getAttribute("data-image");
      const quantityAvailableOnStock = Number(
        button.getAttribute("data-quantity")
      );
      let cart = JSON.parse(localStorage.getItem("cart")) || {};
      if (cart[deckId]) {
        cart[deckId].quantity++;
      } else {
        cart[deckId] = {
          quantity: 1,
          price: price,
          image: imageURL,
          name: name,
          quantityAvailableOnStock: quantityAvailableOnStock,
        };
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
}
