define([

    'backbone',
    'jquery',
    'app/plugins/bxSlider',
    'app/plugins/waypoint',
    'blurjs',
    'bootstrap'

], function(Backbone, $, bxSlider, waypoint, blurjs) {

    'use strict';

    var initialize = function() {

        bxSlider.initialize();
        waypoint.initialize();

        

    };

    return {
        initialize: initialize
    };
});
