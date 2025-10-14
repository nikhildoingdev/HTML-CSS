class QuantityChange extends HTMLElement{
  constructor() {
    super();

    const template = document.getElementById('product__quantity-change').content.cloneNode(true);

    this.id = this.getAttribute('id');
    this.quantity = this.getAttribute('qunatity');

    const qunatityEl = template.querySelector('product__quantity')

    this.replaceChildren(template);
  }
}

export default QuantityChange;