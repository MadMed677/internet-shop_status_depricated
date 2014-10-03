define([

    'backbone',
    'jquery',
    // 'app/plugins/bxSlider',
    'app/plugins/waypoint',
    'blurjs',
    'bootstrap'

], function(Backbone, $, waypoint, blurjs) {

    'use strict';

    var initialize = function() {

        $('.wp1').waypoint( function() {
            $('.wp1').addClass('fadeInLeft');
        }, {
            offset: '75%'
        });

        $('.wp2').waypoint( function() {
            $(this).addClass('fadeInUp');
        }, {
            offset: '70%'
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
        $('.wp7').waypoint(function() {
            $('.wp7').addClass('fadeInRight');
        }, {
            offset: '75%'
        });

        $('.slides').bxSlider({
            controls: false
        });

    };

    return {
        initialize: initialize
    };
});
