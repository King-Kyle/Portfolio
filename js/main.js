
/* ===================================================================
 * # MENU SCROLL SPY
 *
 * ------------------------------------------------------------------- */

 $(document).ready(function(){
     var sections = [];
     var scrolled_id = false;
     var id = false;
     var $navbar = $('.navbar');
     var $navbar__links = $navbar.find('.navbar__link');

     $navbar__links.each(function(){
         sections.push($($(this).attr('href')));
     });

     $navbar__links.click(function(e){
         e.preventDefault();

         $('html, body').animate({
             scrollTop: $($(this).attr('href')).offset().top - 60
         });
     });

     $(window).scroll(function(e){
         e.preventDefault();
         var scrollTop = $(this).scrollTop() + ($(window).height() / 3);


         for(var i in sections){
             var section = sections[i];

             if(scrollTop > section.offset().top){
                 scrolled_id = section.attr('id');
             }

             if(scrolled_id !== id){
                 id = scrolled_id;

                 $navbar__links.removeClass('navbar__link--current');

                 $('a[href="#'+ id + '"]', $navbar).addClass('navbar__link--current');
             }
         }
     });

     $(window).trigger('scroll');
 });


/* ===================================================================
 * # SMOOTH SCROLL
 *
 * ------------------------------------------------------------------- */

 jQuery(document).ready(function($) {

    $('.smoothscroll').on('click',function (e) {
 	    e.preventDefault();

 	    var target = this.hash,
 	    $target = $(target);

 	    $('html, body').stop().animate({
 	        'scrollTop': $target.offset().top
 	    }, 800, 'swing', function () {
 	        window.location.hash = target;
 	    });
 	});

 });

 /* ===================================================================
  * # HIDE SCROLL AT FOOTER
  *
  * ------------------------------------------------------------------- */

  jQuery(document).ready(function(){
    jQuery(window).scroll(function() {
      if (jQuery('body').height() <= (jQuery(window).height() + jQuery(window).scrollTop())) {
        jQuery('.home-scroll').fadeOut("slow");
      } else {
        jQuery(".home-scroll").fadeIn("slow");
      }
    });
  });


/* ===================================================================
 * # SKILLS LOGO ANIMATIONS
 *
 * ------------------------------------------------------------------- */
