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
		})
	}
});

})