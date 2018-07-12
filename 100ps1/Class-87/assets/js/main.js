(function ($){
    "use strict";
    jQuery(document).ready(function($){

        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            dots: true,
            loop: true,
            autoplay: false,
            dotsData: true
        });

    });
}(jQuery));
