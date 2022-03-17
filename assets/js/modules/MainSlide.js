export default function slidePrincipal(name) {
  var swiper = new Swiper(name, {
    slidesPerView: 6,
    spaceBetween: 22,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1500: {
        slidesPerView: 6,
      },
      900: {
        slidesPerView: 5,
      },
      700: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 1.5,
      },
      200: {
        slidesPerView: 1,
      },
    },
  });
}
