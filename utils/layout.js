export function mapDeckToCard(deck) {
  return `
    <div class="deck-card back">
      <div class="top-block">
      <a href ="./details.html?id=${deck.id}"/>
        <img
          src= ${deck.imageURL}
          alt=""
          class="deck-card-logo"
        />
        </a>
      </div>
      <div class="bottom-block">
        <h3>${deck.name}</h3>
        <p>${deck.price} RON</p>
        <button class="add-to-cart" data-deckId='${deck.id}'
        data-name='${deck.name}'
        data-price='${deck.price}'
        data-image='${deck.imageURL}'
        data-quantity='${deck.quantity}'
        >Add to cart</button>
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
