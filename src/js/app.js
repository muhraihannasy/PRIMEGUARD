$(".wilayah-pengurusan").owlCarousel({
  navText: [
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-left.svg' class='prev owl-prev' />",
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-right.svg' class='next owl-next' />",
  ],
  margin: 0,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 4,
      margin: 40,
    },
    600: {
      nav: false,
      items: 3,
    },
    999: {
      nav: false,
      items: 3,
    },
    1000: {
      nav: true,
      items: 5,
    },
    1200: {
      nav: true,
      items: 5,
    },
  },
});

$(".video-carousel").owlCarousel({
  nav: true,
  navText: [
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-left.svg' class='prev-video owl-prev' />",
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-right.svg' class='next-video owl-next' />",
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
  navText: [
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-left.svg' class='prev owl-prev' />",
    "<img src='http://127.0.0.1:5500/src/images/Icon/icn-right.svg' class='next owl-next' />",
  ],
  margin: 80,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      nav: false,
      items: 1,
    },
    600: {
      nav: false,
      items: 2,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});

$(".klien").owlCarousel({
  margin: 40,
  loop: true,
  stagePadding: 100,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 4,
    },
  },
});

// Navbar
const btnOpenNav = document.querySelector(".btn-open-nav");
const btnCloseNav = document.querySelector(".btn-close-nav");
const navbar = document.querySelector(".nav-group");

btnOpenNav.addEventListener("click", () => {
  navbar.classList.add("active");
});

btnCloseNav.addEventListener("click", () => {
  navbar.classList.remove("active");
});
