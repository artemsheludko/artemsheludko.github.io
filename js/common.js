$(function() {
  'use strict';

  var header = $('.header'),
      headerHeight = $(header).innerHeight(),
      headerContent = $('.header__content'),
      menuIcon = $('.menu-icon'),
      menuOverlay = $('.menu-overlay');


  /* =======================
  // Toggle Menu
  ======================= */
  $(menuIcon).click(function () {
    $(this).toggleClass('open');
    headerContent.toggleClass('is-active');
    menuOverlay.toggleClass('is-visible');
  });

  $(menuOverlay).click(function () {
    $(this).removeClass('is-visible');
    menuIcon.removeClass('open')
    headerContent.removeClass('is-active');
  });

  $(window).resize(function () {
    var windowWidth = $(this);
    if(windowWidth.width() >= 576) {
      menuIcon.removeClass('open')
      headerContent.removeClass('is-active');
      menuOverlay.removeClass('is-visible');
    }
  })


  /* =================================
  // Smooth scroll to the pages block
  ================================= */
  $(function($) {
    $('a[href*="#"]:not([href="#"])').click(function(e) {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

        var target = $(this.hash);

        if ($(window).width() <= 576) {
           menuIcon.removeClass('open')
           headerContent.removeClass('is-active');
           menuOverlay.removeClass('is-visible');
        };

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').stop().animate({
            scrollTop: target.offset().top - 30
          }, 500);
        }

      }
    });
  });


  /* =================================
  // Images Fade In
  ================================= */
  $('.fadein').viewportChecker({
    classToAdd: 'inview',
    offset: 100,
    removeClassAfterAnimation: true
  });

});
