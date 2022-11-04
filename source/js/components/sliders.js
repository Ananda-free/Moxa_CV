import Swiper from '../vendor/swiper';


let roadSlider = new Swiper(".index-second__wrapper", {
  slidesPerView: 5,

  loop: true,
  autoplay: true,
  speed: 100000,
  centeredSlides: false,

  // breakpoints: {
  //   320: {
  //     slidesPerView: "auto",
  //     spaceBetween: 20,
  //     centeredSlides: true,
  //   },

  //   575: {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //     centeredSlides: false,
  //   },

  //   767: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //     centeredSlides: false,
  //   },

  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 70,
  //     centeredSlides: false,
  //   },

  //   1240: {
  //     slidesPerView: 4,
  //     spaceBetween: 70,
  //     centeredSlides: false,
  //   },
  // },
});
