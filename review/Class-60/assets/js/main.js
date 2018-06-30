(function ($){
    "use strict";
    jQuery(document).ready(function($){

        $("#map").gmap3({
            address: "Comilla, Bangladesh",
            zoom: 6,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
        });

    })
}(jQuery));
