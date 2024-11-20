export function mapDeckToCard(deck) {
  return `
    <div class="deck-card back">
      <div class="top-block">
        <img
          src= ${deck.imageURL}
          alt=""
          class="deck-card-logo"
        />
      </div>
      <div class="bottom-block">
        <h3>${deck.name}</h3>
        <p>${deck.price} RON</p>
        <button>Adauga in cos</button>
      </div>
    </div>`;
}

export function mapDeckToAdminTableRow(deck) {
  return `
  <tr>
    <td>${deck.name}</td>
    <td>${deck.price} RON</td>
    <td>${deck.quantity}</td>
    <td><img width="100px" src=${deck.imageURL}/></td> 
    <td>${deck.description}</td>
    <td><button class="edit-btn" data-deckId=${deck.id}>Edit</button></td>
    <td><button class="delete-btn" data-deckId=${deck.id}>Delete</button></td>
    </tr>
    `;
}
