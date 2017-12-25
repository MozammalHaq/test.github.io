jQuery(document).ready(function ($) {
    $(".video-btn").magnificPopup({
        type: 'video'
    });
    
     $('#map')
      .gmap3({
        center: [23.2813894,91.1226149],
        address: "Sadar Dakkhin, Comilla",
        zoom: 7,
        mapTypeId : google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
      })
      .marker([
        {position:[23.2813894,91.1226149]},
        {address:"86000 Poitiers, France"},
        {address:"66000 Perpignan, France", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
      ]);
    /*
    
    $('#map').gmap3({
        address: "Haltern am See, Weseler Str. 151",
        zoom: 6,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    });
    */
})
