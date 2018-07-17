(function ($){
    "use strict";
    jQuery(document).ready(function($){

        $(".slider-area").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loop: true,
            autoplay: true
        });

        $(".logo-caurosel").owlCarousel({
            items: 5,
            margin: 30,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true
        });

    });
}(jQuery));
