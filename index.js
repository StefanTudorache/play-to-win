import { getAllDecks } from "./decks.js";
import { mapDeckToCard } from "./utils/layout.js";

const URL = "https://6734f7475995834c8a91885f.mockapi.io/api/decks";
const decksContainer = document.querySelector(".decks");
document.addEventListener("DOMContentLoaded", displayDecks);

async function displayDecks() {
  const decks = await getAllDecks();

  decksContainer.innerHTML = decks.map(mapDeckToCard).join("");
}
