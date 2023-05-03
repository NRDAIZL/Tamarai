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

// Size Buttons

// All size buttons
const sizeBtns = document.querySelectorAll('.size-radio-btn');
// Current selected button 
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.add('click', () => {
        // Removing check class from default button
        sizeBtns[checkedBtn].classList.remove('check');
        // Adding check classto clicked button
        item.classList.add('check');
        // Updating variable
        checkedBtn = i;
    })
})