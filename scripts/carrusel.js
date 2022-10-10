// Opciones carrusel galeria
windowElement.ready(() => {
  $(".carrusel").slick({
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    dots: true,
    centerPadding: "20px",
    slidesToShow: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
