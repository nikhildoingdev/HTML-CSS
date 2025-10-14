import formatMoney from "./utils.js";

class CartItems extends HTMLElement{
  constructor() {
    super();
  }

  render() {
    const template = document.getElementById('product__cart-item');
    this.innerHTML = '';

    window.cart.items.forEach((item,i) => {
      const cartItem = template.content.cloneNode(true);
      
      const imageEl = cartItem.querySelector('.product__image');
      const titleEl = cartItem.querySelector('.product__title');
      const qunatityEl = cartItem.querySelector('.product__quantity');
      const priceEl = cartItem.querySelector('.product__price');

      imageEl.src = item.image;
      titleEl.textContent = item.title;
      qunatityEl.textContent = item.quantity;
      priceEl.textContent = formatMoney(item.price);

      this.appendChild(cartItem);
    });
  }
}

export default CartItems;