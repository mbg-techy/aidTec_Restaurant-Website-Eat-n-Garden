let navbar1 = document.querySelector('.header .navbar');
let menubtn1 = document.querySelector('#menubtn');

menubtn1.onclick = () =>{
    menubtn1.classList.toggle('fa-times');
    navbar1.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    },
});

var swiper = new Swiper(".food-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination:{
        e1:".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});