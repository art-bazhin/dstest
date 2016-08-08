//enable or disable sticky menu on scroll
function makeSticky() {
  if ($(document).scrollTop() >= $('#about-us').offset().top) {
    $('#navigation').addClass('navigation--sticky');
  } else {
    $('#navigation').removeClass('navigation--sticky');
  }
};

$(window).on('scroll', function(e) {
  makeSticky();
});

//anchors scroll
$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  var scroll_el = $(this).attr('href');
  var scroll_dist = $(scroll_el).offset().top;
  var scroll_dur = Math.abs(scroll_dist - $(document).scrollTop()) / 3;

  if ($(scroll_el).length != 0) {
    $('html, body').animate({ scrollTop: scroll_dist }, scroll_dur);
  }
});

//setting promo block height 
function setHeight() {
  $('#promo').css({
    height: $(window).height() + 'px'
  });
}

if (Modernizr.cssvhunit) {
    // vh supported
    $('#promo').css({ height: '100vh' });
  } else {
    // vh not-supported
    setHeight(); 
    $(window).on('resize', function(e) {
      setHeight();
    });
}


