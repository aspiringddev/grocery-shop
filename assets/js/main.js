$(document).ready(function(){

    $('.banner-content').fuwatto({
        duration: 2000,
        slide:'bottom-top',
        distance: 50,
      });
      $('.special-product').fuwatto({
        duration: 2000,
        slide:'bottom-top',
        distance: 50,
      });
      $('.subs-content').fuwatto({ 
        duration: 2000,
        slide:'left-right',
        distance: 50,
      });
      $('.footer-left').fuwatto({ 
        duration: 2000,
        slide:'left-right',
        distance: 50,
      });

      $('.footer-right').fuwatto({ 
        duration: 2000,
        slide:'right-left',
        distance: 50,
      });
    //   testimonial
      $('.sc-left').fuwatto({ 
        duration: 2000,
        slide:'left-right',
        distance: 600,
        adjustment: {
            top: 0,
            left: 0,
          },
      });
      $('.sc-right').fuwatto({ 
        duration: 2000,
        slide:'right-left',
        distance: 600,
      });
    //   latest news
    $('.ln-left').fuwatto({ 
        duration: 2000,
        slide:'left-right',
        distance: 600,
        adjustment: {
            top: 0,
            left: 0,
          },
      });
      $('.ln-right').fuwatto({ 
        duration: 2000,
        slide:'right-left',
        distance: 600,
        adjustment: {
            top: 0,
            left: 0,
          },
      });
  });

  // testimonial swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    loop: true,
  });