import formatMoney from "./utils.js";

class QuantityChange extends HTMLElement{
  constructor() {
    super();

    const template = document.getElementById('product__quantity-change').content.cloneNode(true);

    const buttonEls = template.querySelectorAll('span');

    this.cartItems = document.querySelector('cart-items');

    this.id = this.getAttribute('id');
    this.quantity = this.getAttribute('quantity');
    this.unitPrice = Number(this.getAttribute('price'));

    this.currentCartItem = window.cart.items.find(item => item.id == this.id);

    const quantityEl = template.querySelector('.product__quantity');
    if (quantityEl) quantityEl.textContent = this.quantity;
    this.replaceChildren(template);

    buttonEls.forEach(btn => {
      btn.addEventListener('click', this.handleClick.bind(this));
    })
  }

  handleClick(evt) {
    evt.preventDefault();
    if (evt.target.getAttribute('name') == 'plus') {
      this.currentCartItem.quantity += 1;
      this.currentCartItem.price += this.unitPrice;
    } else {
      if (this.currentCartItem.quantity < 2) {
        window.cart.items.splice(window.cart.items.findIndex(item => item.id === this.id), 1);
      } else {
        this.currentCartItem.quantity -= 1;
        this.currentCartItem.price = this.currentCartItem.price - this.unitPrice;
      }
    }

    this.cartItems.render();
  }


}

export default QuantityChange;