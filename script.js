const preview_images = document.querySelectorAll('.preview-image-container')
const main_image = document.querySelector('.main-image-container img')
  
let activePreview = preview_images[0];
let DEFAULT_IMAGE = activePreview.querySelector('img').src;

main_image.src = DEFAULT_IMAGE;
activePreview.classList.add('active');

['mouseover', 'mouseout', 'click'].forEach(eventType => {
  preview_images.forEach(image => {
    image.addEventListener(eventType, (e) => {
      const src = e.target.src;

      switch (e.type) {
        case 'mouseover':
          main_image.src = src;
          break;
        
        case 'click':
          DEFAULT_IMAGE = src;

          if (activePreview && activePreview !== image) {
            activePreview.classList.remove('active');
          }

          image.classList.add('active');
          activePreview = image;

          break;

        default:
          main_image.src = DEFAULT_IMAGE;
          break;
      }
    })
  })
})