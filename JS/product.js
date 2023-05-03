// Select all images thumb
const productImages = document.querySelectorAll(".product-images img");
// Select image slider elements
const productImageSlide = document.querySelector(".image-slider");

// Default Image slider
let activeImageSlide = 0;

productImages.forEach((item, i) => {
    // Adding click event
    item.addEventListener('click', () => {
        // Removing active image class from current image thumb
        productImages[activeImageSlide].classList.remove('active');
        // Adding active image class to the clicked image
        item.classList.add('active');
        // Setting up image slider's background image
        productImageSlide.getElementsByClassName.backgroundImage = `url('${item.src}')`;
        // Updating image slider variable to track the current thumb
        activeImageSlide = i;
    })
})