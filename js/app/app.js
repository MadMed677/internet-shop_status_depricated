define([

    'backbone',
    'jquery',
    'app/plugins/bxSlider',
    'app/plugins/waypoint',
    'bootstrap'

], function(Backbone, $, bxSlider, waypoint) {

    'use strict';

    var initialize = function() {

        bxSlider.initialize();
        waypoint.initialize();

    };

    return {
        initialize: initialize
    };
});
