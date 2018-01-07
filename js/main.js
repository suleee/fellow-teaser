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


});