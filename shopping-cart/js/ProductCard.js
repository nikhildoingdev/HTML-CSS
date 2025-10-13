class ProductCard extends HTMLElement{
  constructor() {
    super();

    const template = document.getElementById('product__template').content.cloneNode(true);

    const image = this.getAttribute('image');
    const title = this.getAttribute('title');

    const imageEl = template.querySelector('.product__image');
    const titleEl = template.querySelector('.product__title');

    if(imageEl) imageEl.src = image;
    if(titleEl) titleEl.textContent = title;

    this.appendChild(template);

  }
}

export default ProductCard;