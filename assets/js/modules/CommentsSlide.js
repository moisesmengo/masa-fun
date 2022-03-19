export default function commentsSlide() {
  var swiper = new Swiper(".comentarios_slide", {
    slidesPerView: 4.5,
    spaceBetween: 24,
    loop: true,
    pagination: {
      type: "progressbar",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1500: {
        slidesPerView: 4.5,
      },
      900: {
        slidesPerView: 3,
      },

      500: {
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      200: {
        slidesPerView: 1,
      },
    },
  });
}
