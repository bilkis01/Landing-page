
// swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween:20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// navbar toggle

const mobileNav = document.querySelector('.mobile-navbar-btn');
const navHeader = document.querySelector('.header');

const toggleNavbar = () =>{
    navHeader.classList.toggle('active');
}

mobileNav.addEventListener('click', ()=>toggleNavbar());