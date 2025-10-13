import CustomButton from "./test.js";
import CustomLink from "./CustomLink.js";

customElements.define('custom-button', CustomButton, { extends: 'button' });
customElements.define('custom-link', CustomLink, { extends: 'a' });