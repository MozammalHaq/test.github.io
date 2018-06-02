(function ($){
    "use strict";
    jQuery(document).ready(function($){
        $(".listing-caurosel").owlCarousel({
            items: 3,
            nav: false,
            dot: true,
            loop: true,
            autoplay: true,
            margin: 30
        });
    })
}(jQuery));
