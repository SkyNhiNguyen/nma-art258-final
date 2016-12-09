// put all your JS in here

// TOGGLE NAV========================
$(function() {
  var $navToggle = $('.toggle-nav');
  var $mainNav = $('.mainnav ul');
  var $window = $(window);
  var mobileBreakpoint = 700;

  $navToggle.on('click', function() {
    $mainNav.slideToggle();
    $navToggle.toggleClass('active');
  });

  $window.on('resize', function() {
    if ($window.width() > mobileBreakpoint ) {
      $mainNav.removeAttr('style');
      $navToggle.removeClass('active');
    }
  });
});


// HERO FADE OUT
$(window).scroll(function(){
    $(".hero").css("opacity", 1 - $(window).scrollTop() / 800);
  });

// Play Icon---------------------------------------
// click to play
$('.play-icon').on('click',function(){
    if ($('.promo-video-play').get(0).paused){
      $('.promo-video-play').get(0).play();
      $(this).fadeOut();
      $('.promo-video-content').fadeOut();
    }
    else {
      $('.promo-video').get(0).pause();
      $(this).fadeIn();
      $('.promo-video-content').fadeIn();
    }
});

// click to pause
$('.promo-video-play').on('click',function(){
    if ($(this).get(0).play){
      $(this).get(0).pause();
      $('.play-icon').fadeIn();
      $('.promo-video-content').fadeIn();
    }
});

// end>> replay
$('.promo-video-play').on('ended',function(){
  $('.play-icon').fadeIn();
  $('.promo-video-content').fadeIn();
});
// -------------------------------------------------

// REVEAL STUFF------------
// gallery
var GReveal = {
  delay    : 100,
  distance : '70px',
  easing   : 'ease-in-out',
  scale    : 1.1
};

window.sr = ScrollReveal({ reset: true });
sr.reveal('.gallery-grid', GReveal);
sr.reveal('.gallery-cell', { delay: 100, scale: 0.5 });
// window content reveal
sr.reveal('.window-content', { delay: 200, scale: 0.5 });
sr.reveal('.title-content', { delay: 200, scale: 0.5 });


// Carousel
// LINEUP CAROUSEL=====================
$('.carousel-gallery').slick({
  arrows: true,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  fade: true,
  cssEase: 'linear'
});
