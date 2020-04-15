$(document).ready(function () {
    $('.jq-dropdown').click(function (e) { 
    e.preventDefault();
      $('.dropdown-open').slideToggle();
      $('.jq-dropdown').toggleClass('active');
    });
    $('.back-to-top').click(function (e) { 
      e.preventDefault();
        $('html,body').animate({scrollTop: 0},1000);
        });

    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      speed: 800,
      autoplay: {
        delay: 1500,
      },
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });




});
