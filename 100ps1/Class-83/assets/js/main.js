(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        $('#wd-progressbar').circleProgress({
            value: .9,
            size: 250,
            fill: '#0DBBC1',
            startAngle: 4.7,
            thickness: 3,
            emptyFill: '#fff',
            animation: {
                duration: 2000,
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
        });

        $('#gd-progressbar').circleProgress({
            value: .95,
            size: 250,
            fill: '#0DBBC1',
            startAngle: 4.7,
            thickness: 3,
            emptyFill: '#fff',
            animation: {
                duration: 1000,
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(95 * progress) + '<i>%</i>');
        });

        $('#dm-progressbar').circleProgress({
            value: .84,
            size: 250,
            fill: '#0DBBC1',
            startAngle: 4.7,
            thickness: 3,
            emptyFill: '#fff',
            animation: {
                duration: 3000,
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(84 * progress) + '<i>%</i>');
        });

    });
}(jQuery));
