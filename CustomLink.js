class CustomLink extends HTMLAnchorElement{
  constructor() {
    super();

    this.addEventListener('click', evt => {
      if (!confirm('Sure you wanna use Google?')) {
        evt.preventDefault();
      }
    })
  }
}

export default CustomLink;