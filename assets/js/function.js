// Animation
$('.header-title').addClass('animated bounceInLeft');
$('.header-subtitle').addClass('animated bounceInUp');
$('.nav-button, .social-top, footer').addClass('animated fadeIn');

$(document).ready(function() {
  
  // Sidebar
  $('.navigation').on('click', function(e){
    e.preventDefault();
  $('.navigation').html('<span class="icon-cancel-circle"></span>');

  $('.canvas').toggleClass('is-open');
  $('.overlay').addClass('show');

  $('#mask').click(function() {
    $('.canvas').removeClass('is-open');
    $('.overlay').removeClass('show');
    $('.navigation').html('<span class="icon-pencil"></span>');
  });

    $(window).on("resize", function() {
      var e = $(this);
      if (e.width() >= 991) {
        $('.canvas').removeClass('is-open');
        $('.overlay').removeClass('show');
        $('.navigation').html('<span class="icon-pencil"></span>');
      }
    });

  });


});
