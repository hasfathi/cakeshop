
!(function($) {
    "use strict";
  
    // Porfolio isotope and filter
    $(window).on('load', function() {
      var imgSliderIsotope = $('.imgSlider-container').isotope({
        itemSelector: '.imgSlider-item',
        layoutMode: 'fitRows'
      });
  
      $('#imgSlider-flters li').on('click', function() {
        $("#imgSlider-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
  
        imgSliderIsotope.isotope({
          filter: $(this).data('filter')
        });
        aos_init();
      });
  
      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function() {
        $('.venobox').venobox();
      });
    });
  
  
    // imgSlider details carousel
    $(".imgSlider-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  
    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out-back",
        once: true
      });
    }
    $(window).on('load', function() {
      aos_init();
    });
  
  })(jQuery);