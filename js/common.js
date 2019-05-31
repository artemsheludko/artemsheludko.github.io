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
  $('.main-nav .main-nav__link').click(function(e) {
    e.preventDefault();

    if ($(window).width() <= 576) {
      menuIcon.removeClass('open')
      headerContent.removeClass('is-active');
      menuOverlay.removeClass('is-visible');
    };

    var currentBlock = $(this).attr('href'),
        currentBlockOffset = $(currentBlock).offset().top;

    $('html, body').animate({
      scrollTop: currentBlockOffset - headerHeight
    }, 500);
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