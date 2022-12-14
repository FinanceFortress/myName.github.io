const swiper = new Swiper('.swiper', {
  // Navigation arrows
   slidesPerView: 1, //how mach?
   spaceBetween: 10,
  navigation: {
  	// my btn
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // bullets
    clickable: true,
    dynamicBullets: true,
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
   watchOverflow: true,

});

$(function () {
    $('.switch-btn').click(function () {
      $(this).toggleClass('switch-on');
      if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
      } else {
        $(this).trigger('off.switch');
      }
    });
    $('.switch-btn').on('on.switch', function () {
      $($(this).attr('data-id')).removeClass('bl-hide');
    });
    $('.switch-btn').on('off.switch', function () {
      $($(this).attr('data-id')).addClass('bl-hide');
    });
  });

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu ('.burger-menu');
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
  },
});
