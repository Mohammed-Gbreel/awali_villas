// Swiper JS
var swiper = new Swiper(".image-slider", {
    loop: true,
    grabCursor: true,

    slidesPerView: 3,
    spaceBetween: 0,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});


// Number run
let valueDisplay = document.querySelectorAll(".num");
let interval = 5000;

valueDisplay.forEach(valueDisplay=> {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter); 
        }
    }, duration);
});




// Play vedio
var vedio = document.querySelectorAll('video');

vedio.forEach(play => play.addEventListener('click', ()=>{
    play.classList.toggle('active');

    if (play.paused) {
        play.play();
    } else {
        play.pause();
        play.currentTime = 0
    }
}));




$(document).ready(function () {

    $('.buttons').click(function () {
        var filter = $(this).attr('data-filter');
        if (filter == 'map') {
            $('.filter-image').not('.' + filter).hide();
            $('.filter-image').filter('.' + filter).show();
        } else {
            $('.filter-image').not('.' + filter).hide();
            $('.filter-image').filter('.' + filter).show();
        }

        $(this).addClass('active').siblings().removeClass('active');
    });

});


// Light Gallery
lightGallery(document.querySelector('.build-gallery'));