(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

    $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    var s = skrollr.init({
        render: function(data){
            //Debugging - log the current scroll position.
            //colsole.log(data.curTop);
        }
    });

    });


    jQuery(window).load(function () {


    });


}(jQuery));
