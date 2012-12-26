!function ($) {

   $("#checkbox_hxwz").buttonset();
   $("#checkbox_jzxs").buttonset();
   $("#checkbox_hx").buttonset();
   $("#checkbox_mjqj").buttonset();
   $("#checkbox_cpsx").buttonset();
   $("#checkbox_xzqy").buttonset();
    $('#datepicker').datepicker({
        inline: true
    });
   $('#rangeA').daterangepicker();
   $('#rangeB').daterangepicker();
 /* $(function(){

    // fix sub nav on scroll
    var $win = $(window)
      , $nav = $('.subnav')
	  , navHeight = $('.navbar').first().height()
      , navTop = $('.subnav').length && $('.subnav').offset().top - navHeight
      , isFixed = 0

    processScroll()

    $win.on('scroll', processScroll)

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = 1
        $nav.addClass('subnav-fixed')
      } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('subnav-fixed')
      }
    }

  })*/

}(window.jQuery)