$(function () {
  $(".t-t-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-t-gallery-list-left",
    nextArrow: ".t-t-gallery-list-right",
  });
});

$(function () {
  $(".t-t-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-t-reviews-list-left",
    nextArrow: ".t-t-reviews-list-right",
  });
});
