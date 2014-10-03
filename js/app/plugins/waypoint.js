define([

    'waypoints',
    'waypointsSticky'

], function(waypoint) {

    var initialize = function() {

        // ---------------------------------
        // Waypoint on INDEX page
        // ---------------------------------

        $('.wp1').waypoint( function() {
            $('.wp1').addClass('fadeInLeft');
        }, {
            offset: '75%'
        });

        $('.wp2')
            .waypoint(function() {
                $('.wp2')
                    .removeClass('fadeOutUp visible')
                    .addClass('fadeInUp');
            }, {
                offset: '75%'
            })
            .waypoint(function(dir) {
                if ( dir === 'down' ) {
                    $('.wp2')
                        .removeClass('fadeInUp')
                        .addClass('visible fadeOutUp');
                } else {
                    $('.wp2')
                        .removeClass('fadeOutUp visible')
                        .addClass('fadeInUp');
                }
            }, {
                offset: '10%'
            });

        $('.wp3').waypoint(function() {
            $('.wp3').addClass('fadeInDown');
        }, {
            offset: '55%'
        });
        $('.wp4').waypoint(function() {
            $('.wp4').addClass('fadeInDown');
        }, {
            offset: '75%'
        });
        $('.wp5').waypoint(function() {
            $('.wp5').addClass('fadeInUp');
        }, {
            offset: '75%'
        });
        $('.wp6').waypoint(function() {
            $('.wp6').addClass('fadeInDown');
        }, {
            offset: '75%'
        });


        // ---------------------------------
        // Navigation fixed and minimalizend
        // ---------------------------------

        $(window).on( 'scroll', function() {
            if ( $(this).scrollTop() >= 300 ) {
                $('.navbar-mm').addClass('minimaze');
            } else {
                $('.navbar-mm').removeClass('minimaze');
            }
        });

    };

    return {
        initialize: initialize
    };
});
