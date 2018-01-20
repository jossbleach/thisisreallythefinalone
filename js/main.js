$(document).ready(function(){

    $('.js-tilt').tilt({
        scale: 1.2
    })

    $(function() {
       //Scrolling Effects
       var heroHeading = $(".hero-heading");
       var heroSub = $(".hero-subheading");
       var heroMouse = $(".scroll-btn");
       var navLogo = $(".navlogo");
       var navColour = $(".navigation");
       var navLinks = $(".list__item")
       var navActive = $(".list__item--active")
       $(window).scroll(function() {
           var scroll = $(window).scrollTop();

           if (scroll >= 100) {
               navLogo.removeClass('navigation__logo--default').addClass('navigation__logo--scroll');
               navColour.removeClass('navigation__bar--default').addClass('navigation__bar--scroll');
               navLinks.removeClass('list__item--default').addClass('list__item--scroll');
               navActive.removeClass('list__item--active--default').addClass('list__item--active--scroll');
           } else {
               navLogo.removeClass('navigation__logo--scroll').addClass('navigation__logo--default');
               navColour.removeClass('navigation__bar--scroll').addClass('navigation__bar--deault');
               navLinks.removeClass('list__item--scroll').addClass('list__item--default');
               navActive.removeClass('list__item--active--scroll').addClass('list__item--active--default');
               navActive.removeClass('list__item--active--scroll').addClass('list__item--active--default');
           }
           if (scroll >= 150) {
               heroHeading.removeClass('default').addClass('transparent');
               heroSub.removeClass('default').addClass('transparent');
               heroMouse.removeClass('default').addClass('transparent');
           } else {
               heroHeading.removeClass('transparent').addClass('default');
               heroSub.removeClass('transparent').addClass('default');
               heroMouse.removeClass('transparent').addClass('default');
           }
       });
    });

    $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
        $('.hidden-menu').toggleClass('fixed');
        $('.mobile-nav').toggleClass('fixed-nav');
	});




});
