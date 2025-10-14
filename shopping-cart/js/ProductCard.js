import formatMoney from "./utils.js";

class ProductCard extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("product__template").content.cloneNode(true);

    this.cartItems = document.querySelector('cart-items');
    
    this.id = this.getAttribute("id");
    this.image = this.getAttribute("image");
    this.title = this.getAttribute("title");
    this.price = Number(this.getAttribute("price"));

    const imageEl = template.querySelector(".product__image");
    const titleEl = template.querySelector(".product__title");
    const priceEl = template.querySelector(".product__price");
    const buttonEl = template.querySelector(".product__add-to-cart");

    if (imageEl)
      imageEl.src = this.image;
    if (titleEl) 
      titleEl.textContent = this.title;
    if (priceEl) 
      priceEl.textContent = formatMoney(this.price);
    
    buttonEl.addEventListener("click", this.addToCart.bind(this));
    this.appendChild(template);
  }

  addToCart() {
    const item = {
      id: this.id,
      title: this.title,
      quantity: 1,
      price: this.price,
      image: this.image
    };

    const itemInCart = window.cart.items.find(i => i.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++;
      itemInCart.price += this.price;
    } else {
      window.cart.items.push(item);
    }

    console.log(window.cart.items)

    this.cartItems.render();
  }
}

export default ProductCard;