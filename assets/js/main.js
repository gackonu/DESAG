$(document).ready(function(){
    $('.sidenav').sidenav({
      inDuration: 400,
      outDuration: 300,
    });
    $(".owl-carousel").owlCarousel({
      margin: 20,
      autoplay: true,
      loop: true,
      autoplayTimeout: 7000,
      autoplaySpeed: 3000,
      responsive: {
        768: {
          items: 5,
        }
      }
    });
  });

  // $(window).on('scroll', function() {
  //   if($(window).scrollTop() > 400) {
  //     $('nav').addClass('scrolled');
  //   }
  //   else {
  //     $('nav').removeClass('scrolled')
  //   }
  // })