(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        $('#map')
            .gmap3({
                center: [23.2813894, 91.1226149],
                address: "Sadar Dakkhin, Comilla",
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
            })
            .marker([
                {
                    position: [23.2813894, 91.1226149]
            },
                {
                    icon: "../img/map-marker.png"
                },
      ]);

    });
}(jQuery));
