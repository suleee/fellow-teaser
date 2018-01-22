// smooth scrolling: anchor point
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 78
        }, 500);
        return false;
      }
    }
  });
  $('.logo').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
  $('.about-scroll').click(function () {
    $('html,body').animate({
      scrollTop: 400
    }, 1000);
  });

  $('.pre-register-btn img').hover(function(){
    $(this).attr('src', $(this).attr('data-hover'));
  }, function(){
    $(this).attr('src', $(this).attr('data-main'));
  });


  $(document).ready(function(){
    var $pre = $('.pre-section3');
    $pre.addClass('idx-0');
    var $arrowLeft = $('.section3 .arrow-left');
    var $arrowRight = $('.section3 .arrow-right');
    var $iconsList = $('.section3 .icon-list');
    var $sliderSel = $('.class-content');
    $sliderSel.slick({
      dots: false,
      nextArrow: $arrowRight,
      prevArrow: $arrowLeft,
      // infinite: true,
      // speed: 500,
      fade: true,
      cssEase: 'linear',
    });

    $sliderSel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.pre-section3').removeClass (function (index, className) {
        return (className.match (/(^|\s)idx-\S+/g) || []).join(' ');
      });
      var nextName = $('.section3 .slick-slide[data-slick-index="' + nextSlide + '"]').attr('data-name');
      $pre.addClass('idx-' + nextName);
    });
    
    $iconsList.find('li').on('click', function(){
      var name = $(this).attr('class');
      var index = $('.section3 .slick-slide[data-name="' + name + '"]').attr('data-slick-index');
      $sliderSel.slick('slickGoTo', index, false);
      $iconsList.find('li').removeClass('active');
      $iconsList.find('.' + name).addClass('active');
    });

    var $mediaSel = $('.media');
    var $allContainers = $('.media-thumb-container', $mediaSel);
    var $allLinks = $('.media-tab li a', $mediaSel);
    $('li a', $mediaSel).on('click', function(){
      var $this = $(this);
      var selectedName = $this.attr('data-section-selector');
      var $activeSection = $('.media-thumb-container[data-section="' + selectedName + '"]', $mediaSel);
      $allLinks.removeClass('active');
      $this.addClass('active');
      $allContainers.addClass('hide');
      $activeSection.removeClass('hide');
      
    });
  });

  // items
  // $(".item-list").flickity({
  //   cellAlign: 'center',
  //   contain: true,
  //   percentPosition: true,
  //   imagesLoaded: true,
  //   autoPlay: true,
  //   prevNextButtons: false
  // });



// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});




});






function popupOpenClose(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popup).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});
});

// Email
$(document).ready(function(){
  $('#email-send').on('click', function() {
    var $content = $('#email-thankyou');
    // $.featherlight($content);
    var $mail = $('#email').val();
    $.ajax({
      method: "POST",
      url: "send.php",
      data: { mail: $mail }
    })
    .done(function( msg ) {
      $.featherlight($content);
    });
  })
});