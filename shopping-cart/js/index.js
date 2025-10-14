import CartItems from "./CartItems.js";
import ProductCard from "./ProductCard.js"

window.cart = {
  items: []
}

customElements.define('product-card', ProductCard);
customElements.define('cart-items', CartItems);

