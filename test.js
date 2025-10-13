class CustomButton extends HTMLButtonElement {
  constructor() {
    super();

    this.link = this.getAttribute('link');
    this.link && this.addEventListener('click', () => window.location.href = this.link);
  }
}

export default CustomButton;