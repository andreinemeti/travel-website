var wow = new WOW({
    animateClass: 'animated',
    mobile: false,
    offset: 50
});
wow.init();

$(document).ready(function() {
    "use strict";




    //wow.js on scroll animations initialization


    var header = $('.header');
    var hamb = $('.hamburger');
    var hambActive = false;
    var menuActive = false;

    initHamburger();
    initSlider();



    function initHamburger() {
      
            hamb.on('click', function(event) {
                event.stopPropagation();

                if (!menuActive) {
                    openMenu();
                    $('body').css({
                        overflow: 'hidden',

                    });
                    $('.close-btn-container').click(function() {
                        closeMenu();
                        $('body').css({
                            'overflow-y': 'scroll',
                        });
                    });
                } else {
                    $('.mobile-menu').removeClass('active');
                    menuActive = false;
                }
            });
        }
 

    function openMenu() {
        var fs = $('.mobile-menu');
        fs.addClass('active');
        hambActive = true;
        menuActive = true;
    }

    function closeMenu() {
        var fs = $('.mobile-menu');
        fs.removeClass('active');
        hambActive = false;
        menuActive = false;
    }

    /* 

    4. Set Header

    */

    function initSlider() {
        if ($('.special_slider').length) {
            var specialSlider = $('.special_slider');
            specialSlider.owlCarousel({
                loop: true,
                autoplay: false,
                center: true,
                stagePadding: 190,
                margin: 5,
                nav: false,
                dots: false,
                smartSpeed: 700,
                responsive: {
                    0: { items: 1, margin: 5, stagePadding: 0 },
                    992: { items: 2, margin: 5, stagePadding: 130 },
                    1280: { items: 3, margin: 5, stagePadding: 190 }
                }
            });
        }

        if ($('.slider-nav-right').length) {
            var next = $('.slider-nav-right');
            next.on('click', function() {
                specialSlider.trigger('next.owl.carousel');
            });
        }

        $('.slider-nav-left').click(function() {

            specialSlider.trigger('prev.owl.carousel');
        })
    }



    // 7.slow scrolling

    //slow scrolling when clicking on links
    $(document).ready(function() {
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                if ($(window).width() > 767) {
                    event.preventDefault();
                    var hash = this.hash;

                    $('html, body').animate({

                        scrollTop: $(hash).offset().top - 90
                    }, 800, function() {
                        window.location.hash = hash;
                    });
                } else {
                    event.preventDefault();
                    var hash = this.hash;

                    $('html, body').animate({

                        scrollTop: $(hash).offset().top 
                    }, 800, function() {
                        window.location.hash = hash;
                    });



                }
            }
        });
    });
});