document.addEventListener("DOMContentLoaded", showCart);
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotalContainer = document.querySelector(".cart-total");
let cart;
function showCart() {
  cart = JSON.parse(localStorage.getItem("cart"));

  let grandTotal = 0;
  cartItemsContainer.innerHTML = "";

  for (let id in cart) {
    cartItemsContainer.innerHTML += `<div class="cart-item">
  <img class="cart-item-image" width="80px" src="${cart[id].image}" alt="${
      cart[id].name
    }" />
  <div class="cart-item-details">
    <span class="cart-item-name">${cart[id].name}</span>
    <span class="cart-item-price">Unit price: ${cart[id].price} RON</span>
    <span class="cart-item-total">Total price for the product: ${
      cart[id].price * cart[id].quantity
    } RON</span>
  </div>
  <div class="cart-item-quantity">
    <button class="cart-item-button decrease" data-id=${id}>-</button>
    <span class="cart-item-quantity-value">${cart[id].quantity}</span>
    <button class="cart-item-button increase" data-id=${id}>+</button>
    <button class="delete" data-id=${id}>Remove</button>
  </div>
</div>
    `;
    grandTotal = grandTotal + cart[id].price * cart[id].quantity;
  }
  cartTotalContainer.innerHTML =
    grandTotal === 0 ? "Your cart is empty!" : `Grand total: ${grandTotal} RON`;
}
cartItemsContainer.addEventListener("click", (event) => {
  const btn = event.target;
  const id = btn.getAttribute("data-id");
  if (btn.classList.contains("increase")) {
    const id = btn.getAttribute("data-id");
    cart[id].quantity++;
  } else if (btn.classList.contains("decrease")) {
    cart[id].quantity--;
  } else if (btn.classList.contains("delete")) {
    delete cart[id];
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
});
