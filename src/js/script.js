$(document).ready(function () {
  $('.reviews__inner').slick({
    speed: 1200,
    adaptiveHeight: false,
    // autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: true,
        },
      },
    ],
  });
});
