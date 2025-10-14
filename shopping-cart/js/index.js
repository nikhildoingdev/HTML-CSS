import CartItems from "./CartItems.js";
import ProductCard from "./ProductCard.js"
import QuantityChange from "./QuantityChange.js";

window.cart = {
  items: []
}

customElements.define('product-card', ProductCard);
customElements.define('cart-items', CartItems);
customElements.define('qunatity-change', QuantityChange);

