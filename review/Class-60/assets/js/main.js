(function ($){
    "use strict";
    jQuery(document).ready(function($){

        $("#map").gmap3({
            address: "Dhaka, Bangladesh",
            zoom: 10,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
        });

    })
}(jQuery));
