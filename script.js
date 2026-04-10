// Initialize AOS (Animate on Scroll)
AOS.init({
    once: false,
    mirror: true,
    offset: 50,
});

// Navbar background change on scroll within the scroll container
const mainContent = document.querySelector('.main-content');
const navbar = document.querySelector('.navbar');

mainContent.addEventListener('scroll', () => {
    if (mainContent.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Swiper (Founders Parallax Slider)
const founderSwiper = new Swiper('.founderSwiper', {
    effect: 'cards',
    grabCursor: true,
    loop: true,
    cardsEffect: {
        perSlideOffset: 8,
        perSlideRotate: 2,
        rotate: true,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    }
});

// Initialize Swiper for Experience Gallery
const gallerySwiper = new Swiper('.gallerySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    pagination: {
        el: '.gallery-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});
