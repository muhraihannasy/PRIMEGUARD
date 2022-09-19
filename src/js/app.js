$(".wilayah-pengurusan").owlCarousel({
  nav: true,
  navText: [
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-left.svg' class='prev owl-prev' />",
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-right.svg' class='next owl-next' />",
  ],
  margin: 0,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".video-carousel").owlCarousel({
  nav: true,
  navText: [
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-left.svg' class='prev owl-prev' />",
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-right.svg' class='next owl-next' />",
  ],
  margin: 20,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".testimoni").owlCarousel({
  nav: true,
  navText: [
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-left.svg' class='prev owl-prev' />",
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-right.svg' class='next owl-next' />",
  ],
  margin: 80,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
