class ProductCard extends HTMLElement{
  constructor() {
    super();

    const template = document.getElementById('product__template').content.cloneNode(true);

    this.id = this.getAttribute('id');
    this.image = this.getAttribute('image');
    this.title = this.getAttribute('title');
    this.price = this.getAttribute('price');

    const imageEl = template.querySelector('.product__image');
    const titleEl = template.querySelector('.product__title');
    const buttonEl = template.querySelector('.product__add-to-cart');

    if(imageEl) imageEl.src = this.image;
    if(titleEl) titleEl.textContent = this.title;

    buttonEl.addEventListener('click', this.addToCart.bind(this));
    this.appendChild(template);
  }

  addToCart() {
    const item = {
      id: this.id,
      title: this.title,
      quantity: 1,
      price: this.price
    }

    console.log(item)
  }
}

export default ProductCard;