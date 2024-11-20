import {
  addNewDeck,
  deleteDeck,
  getAllDecks,
  getDeckById,
  updateDeck,
} from "./api/decks.js";
import { mapDeckToAdminTableRow } from "./utils/layout.js";

const decksTableBody = document
  .getElementById("decks-table")
  .querySelector("tbody");

document.addEventListener("DOMContentLoaded", displayDecks);

const URL = "https://6734f7475995834c8a91885f.mockapi.io/api/decks";

async function displayDecks() {
  const decks = await getAllDecks();
  decksTableBody.innerHTML = decks.map(mapDeckToAdminTableRow).join("");
}

// Save a deck
const form = document.getElementById("deck-form");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const imageUrlInput = document.getElementById("image-url");
const descriptionInput = document.getElementById("description");
const saveDeckBtn = document.getElementById("save-btn");
let currentEditableDeckId;
let editMode = false;

saveDeckBtn.addEventListener("click", saveDeck);

async function saveDeck(event) {
  event.preventDefault();

  const deck = {
    name: nameInput.value,
    price: Number(priceInput.value),
    quantity: Number(quantityInput.value),
    imageURL: imageUrlInput.value,
    description: descriptionInput.value,
  };

  if (
    deck.name === "" ||
    deck.price === 0 ||
    deck.quantity === 0 ||
    deck.imageURL === "" ||
    deck.description === ""
  ) {
    alert("Fill the empty fields");
    return;
  }
  if (!isValidURL(deck.imageURL)) {
    alert("Use a valid URL");
    return;
  }

  if (deck.quantity < 0 || deck.price < 0) {
    alert("Use a positive value");
    return;
  }

  if (editMode) {
    await updateDeck(deck, currentEditableDeckId);
    form.reset();
    displayDecks();
    editMode = false;
  } else {
    await addNewDeck(deck);
    displayDecks();
    form.reset();
  }
}

decksTableBody.addEventListener("click", handleActions);

async function handleActions(event) {
  if (event.target.classList.contains("edit-btn")) {
    currentEditableDeckId = event.target.getAttribute("data-deckId");
    const deck = await getDeckById(currentEditableDeckId);
    nameInput.value = deck.name;
    priceInput.value = deck.price;
    quantityInput.value = deck.quantity;
    imageUrlInput.value = deck.imageURL;
    descriptionInput.value = deck.description;
    editMode = true;
  } else if (event.target.classList.contains("delete-btn")) {
    const id = event.target.getAttribute("data-deckId");
    await deleteDeck(id);
    displayDecks();
  }
}

function isValidURL(string) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(string);
}
