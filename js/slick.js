$(function () {
  $(".t-r-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-r-gallery-list-left",
    nextArrow: ".t-r-gallery-list-right",
  });
});

$(function () {
  $(".t-r-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-r-reviews-list-left",
    nextArrow: ".t-r-reviews-list-right",
  });
});
$(function () {
  $(".t-r-how-lists").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".t-r-how-lists-left",
    nextArrow: ".t-r-how-lists-right",
  });
});
