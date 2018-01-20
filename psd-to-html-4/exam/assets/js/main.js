jQuery(document).ready(function ($) {
    $(".video-btn").magnificPopup({
        type: 'video'
    });

    $('.mainmenu').slicknav();

    $('#map')
        .gmap3({
            center: [23.2813894, 91.1226149],
            address: "Sadar Dakkhin, Comilla",
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
        })
        .marker([
            {
                position: [23.2813894, 91.1226149]
            },
            {
                address: "86000 Poitiers, France"
            },
            {
                address: "66000 Perpignan, France",
                icon: "http://maps.google.com/mapfiles/marker_grey.png"
            }
      ]);

})
