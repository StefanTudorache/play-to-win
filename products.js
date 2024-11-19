const URL = "https://6734f7475995834c8a91885f.mockapi.io/api/decks";

export async function getAllDecks() {
  const response = await fetch(URL);
  const decks = await response.json();

  return decks;
}

export async function getDecksById(id) {
  const response = await fetch(`${URL}/${id}`);
  const deck = response.json();
  return deck;
}

export async function addNewDeck(deck) {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(deck),
  });
  const newDeck = await response.json();
  return newDeck;
}

export async function updateDeck(deck, id) {
  const response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(deck),
  });
  const editedDeck = await response.json();
  return editedDeck;
}

export async function deleteDeck(id) {
  await fetch(`${URL}/${id}`, { method: "DELETE" });
}
