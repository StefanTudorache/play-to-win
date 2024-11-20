import { getDeckById } from "./api/decks.js";
document.addEventListener("DOMContentLoaded", showDeckDetails);

async function showDeckDetails() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const deckId = urlSearchParams.get("id");

  const deck = await getDeckById(deckId);
  document.querySelector(".content").innerHTML = `
  <h2>${deck.description}</h2>
  `;
}
