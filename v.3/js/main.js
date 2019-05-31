// Smooth scroll to the section
$(".main-list li .main-link, .arrow-down").click(function(e) {
  e.preventDefault();
  var currentBlock = $(this).attr("href"),
      currentBlockOffset = $(currentBlock).offset().top;
      $("html, body").animate({
        scrollTop: currentBlockOffset
      }, 500);
});