const swiper = new Swiper('.swiper', {
    loop: true,
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    }
});