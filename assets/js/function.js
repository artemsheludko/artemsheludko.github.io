$(document).ready(function() {

// Navigation
$('.navigation').on('click', function(e){
	e.preventDefault();
	$(this).addClass('open');
	$('.sidebar').toggleClass('open');

	if ($('.sidebar').hasClass('open')) {
		$('.menu-close').on('click', function(e){
			e.preventDefault();
			$('.sidebar').removeClass('open');
		});
	}
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
						$('.formBlock').hide();
						$('.thankyouBlock').show();
				}

		});

});

});
