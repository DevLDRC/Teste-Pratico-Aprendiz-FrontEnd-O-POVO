$(document).ready(function() {

  // Mobile menu
  $('.menu-toggle').on('click', function() {
    const $nav = $('.mobile-nav');
    const isHidden = $nav.attr('hidden') !== undefined;
    
    if (isHidden) {
      $nav.removeAttr('hidden');
      $(this).attr('aria-expanded', 'true');
    } else {
      $nav.attr('hidden', '');
      $(this).attr('aria-expanded', 'false');
    }
  });

  // Fechar o menu ao clicar em um link (mobile)
  $('.mobile-nav .nav-link').on('click', function() {
    $('.mobile-nav').attr('hidden', '');
    $('.menu-toggle').attr('aria-expanded', 'false');
  });

  // Fechar o menu quando estiver em Desktop
  $(window).on('resize', function() {
    if ($(window).width() > 1024) {
      const $nav = $('.mobile-nav');
      if ($nav.attr('hidden') === undefined) {
        $nav.attr('hidden', '');
        $('.menu-toggle').attr('aria-expanded', 'false');
      }
    }
  });

  // Elenco Carousel
  $('.cast-list').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  });

});
