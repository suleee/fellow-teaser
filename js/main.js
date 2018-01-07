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


  // items
  // $(".item-list").flickity({
  //   cellAlign: 'center',
  //   contain: true,
  //   percentPosition: true,
  //   imagesLoaded: true,
  //   autoPlay: true,
  //   prevNextButtons: false
  // });


});