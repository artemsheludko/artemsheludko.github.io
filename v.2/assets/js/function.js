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

  // Send to Formspree
  $('.contact-form').on('submit', function(e) {
  		e.preventDefault();

  		//get the name field value
  		var name = $('#name').val();
  		//get the name field value
  		var email = $('#email').val();
  		//get the comments
  		var comments = $('#comments').val();

  		$.ajax({
  				url:'https://formspree.io/me@artemsheludko.pw',
  				method:'POST',
  				data:{
  						name:name,
  						_replyto:email,
  						comments:comments,
  						_subject:'Contact Form',
  				},
  				dataType:"json",
  				success:function() {
  						console.log('success');
  						$('.form-block').hide();
  						$('.thank-you-block').show();
  				}

  		});

  });


});
