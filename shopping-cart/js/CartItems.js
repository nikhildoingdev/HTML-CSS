import formatMoney from "./utils.js";

class CartItems extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    if (window.cart.items.length < 1) {

      this.innerHTML = `
      <div class="flex justify-center items-center p-8 text-xl bg-emerald-100">
      <h2>No products in the cart</h2>
      </div>
    `;
      return
    }

    const template = document.getElementById("product__cart-item");
    this.innerHTML = `
      <div class="flex justify-between my-2 text-xl bg-emerald-100">
      <h2>Product Details</h2>
      <h2>Total</h2>
      </div>
    `;

    window.cart.items.forEach((item, i) => {
      const cartItem = template.content.cloneNode(true);

      const imageEl = cartItem.querySelector(".product__image");
      const titleEl = cartItem.querySelector(".product__title");
      const qunatityEl = cartItem.querySelector("qunatity-change");
      const priceEl = cartItem.querySelector(".product__price");

      imageEl.src = item.image;
      titleEl.textContent = item.title;
      qunatityEl.setAttribute('id', item.id);
      qunatityEl.setAttribute('quantity', item.quantity);
      qunatityEl.setAttribute('price', item.unitPrice);
      priceEl.textContent = formatMoney(item.price);

      this.appendChild(cartItem);
    });

    const cartTotal = window.cart.items.reduce((total, item) => parseInt(total + item.price), 0);

    this.innerHTML += `
      <div class="flex justify-between my-2 text-xl bg-emerald-100">
      <h2>Grand Total</h2>
      <h2>${formatMoney(cartTotal)}</h2>
      </div>
    `;
  }
}

export default CartItems;