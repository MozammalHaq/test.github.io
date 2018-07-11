(function ($){
    "use strict";
    jQuery(document).ready(function($){

        $(".testimonial-caurosel").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
            autoplay: true
        });

    })
}(jQuery));
