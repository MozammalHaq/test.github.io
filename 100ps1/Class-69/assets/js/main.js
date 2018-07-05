(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        $(".case-study-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: true,
            nav: false,
        });


        $(".logo-carosel").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
        });

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
        });

        $(".home-page-slides").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            dots: true,
            nav: true,
            navText: ["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"],
        });

        $(".menu-trigger").on('click', function(){
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-overlay").addClass("active");
        });

        $(".menu-close, .off-canvas-menu-overlay").on('click', function(){
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-overlay").removeClass("active");
        });

        $(".single-testimonial-box").hover(function(){
            $(".single-testimonial-box").removeClass('active');
            $(this).addClass('active');
        });

        $(".video-play-btn").magnificPopup({
            type: 'vedio',
        });

        $(".search-trigger").on('click', function(){
            $(".search-area").addClass('active');
            $(".off-canvas-menu-overlay").addClass("active");
        });

        $(".menu-close, .off-canvas-menu-overlay").on('click', function(){
            $(".search-area").removeClass('active');
            $(".off-canvas-menu-overlay").removeClass("active");
        });

        var footerHeight = $(".footer-fixed").height();
        $(".site-menu-wrapper").css('margin-bottom', footerHeight + 'px');

    });


    jQuery(window).load(function () {


    });


}(jQuery));
