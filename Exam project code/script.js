var currentSlide = 1;
var images = ['barone1.png', 'barone2.png'];

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 1) {
        currentSlide = images.length; // Loop back to the last image
    } else if (currentSlide > images.length) {
        currentSlide = 1; // Loop back to the first image
    }
    document.querySelector('.gallery-image').src = images[currentSlide - 1];
}
