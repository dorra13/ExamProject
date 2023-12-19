var currentSlide = 1;
var images = ['azimut2.png', 'azimut3.png'];

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 1) {
        currentSlide = images.length; // Loop back to the last image
    } else if (currentSlide > images.length) {
        currentSlide = 1; // Loop back to the first image
    }
    document.querySelector('.gallery-image').src = images[currentSlide - 1];
}
