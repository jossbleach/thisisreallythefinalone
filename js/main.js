$(document).ready(function(){

    // function animationHover(element, animation){
    //     element = $(element);
    //     element.hover(
    //         function() {
    //             element.addClass('animated ' + animation);
    //         },
    //         function(){
    //             //wait for animation to finish before removing classes
    //             window.setTimeout( function(){
    //                 element.removeClass('animated ' + animation);
    //             }, 2000);
    //         });
    // }
    //   $('#street_image').each(function() {
    //       animationHover(this, 'shake');
    //   });
    //
    //   $('.js-tilt').tilt({
    //       scale: 1.2
    //   })
     window.onbeforeunload = function () {
       window.scrollTo(0, 0);
     }
     $(function initMap() {
      var myLatLng = {lat: 51.53066, lng: -0.093566};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
      });
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'SilverCloud Creative'
              });
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
