jQuery(document).ready(function() {
    if($( window ).width() <= 991 && $( window ).width() >= 481){
        $(".mobile-menu li:nth-of-type(2) a").click(function() {
            $('html, body').animate({
                scrollTop: $("#features").offset().top-60
            }, 0);
        });
        $(".mobile-menu li:nth-of-type(3) a").click(function() {
            $('html, body').animate({
                scrollTop: $("#technology").offset().top-60
            }, 0);
        });
        $(".mobile-menu li:nth-of-type(4) a").click(function() {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top-60
            }, 0);
        });
        $(".mobile-menu li:first-of-type a").click(function() {
            $('html, body').animate({
                scrollTop: $("#overview").offset().top-60
            }, 0);
        });
    }
    if($( window ).width() <= 480){
        $(".mobile-menu li:nth-of-type(2) a").click(function() {
            $('html, body').animate({
                scrollTop: $("#features").offset().top-41
            }, 0);
        });
        $(".mobile-menu li:nth-of-type(3) a").click(function() {
            $('html, body').animate({
                scrollTop: $("#technology").offset().top-41
            }, 0);
        });
        $(".mobile-menu li:nth-of-type(4) a").click(function() {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top-41
            }, 0);
        });
        $(".mobile-menu li:first-of-type a").click(function() {
            $('html, body').animate({
                scrollTop: $("#overview").offset().top-41
            }, 0);
        });
    }
});