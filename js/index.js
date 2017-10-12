var smallWindow;

jQuery(document).ready(function($) {

    /*----------------------------------------------------*/
    /*	Fade In/Out Primary Navigation
     ------------------------------------------------------*/

    $(window).on('scroll', function() {
        var h = $('#logo-section').height();
        var y = $(window).scrollTop();
        var nav = $('#nav-wrap');

        if ( (y > h * 0.1) && (y < h * 0.8) && ($(window).outerWidth() > 768 ) ) {
            nav.fadeOut('fast');
        } else {
            nav.fadeIn('fast');
        }
    });

    /*----------------------------------------------------*/
    /*	Check if FAQ should be collapsed
     ------------------------------------------------------*/

    function checkWidth() {
        var windowSize = $(window).width();
        //if (windowSize < 768) {
            smallWindow = true;
            $("#faq-section h4").each(function () {
                var element = $(this).next();
                var angle = $(this).find('i');
                if (element.is(":visible")) {
                    element.slideUp(500);
                    if (!angle.hasClass('down')) {
                        angle.toggleClass('down');
                    }
                }
                element.removeClass('faq-item-selected');
            });
        /*} else {
            $("#faq-section p").slideDown(0);
            smallWindow = false;
        }*/
    }

    $("#faq-section h4").click(function () {
        //if (smallWindow) {
            var element = $(this).next();
            var angle = $(this).find('i');
            if (element.is(":visible")) {
                element.slideUp(500);
                angle.toggleClass('down');
            } else {
                $("#faq-item-selected").parent().find('i').toggleClass('down');
                $("#faq-item-selected").slideUp(500).removeClass("faq-item-selected");
                element.slideDown(500);
                element.addClass("faq-item-selected");
                angle.toggleClass('down');
            }
        //}

    });

    checkWidth();
    $(window).resize(checkWidth());
});