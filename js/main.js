require.config({

    paths: {
        'jquery': 'libs/jquery.min2',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'bootstrap': 'libs/bootstrap',
        'backbone.localStorage': 'libs/backbone.localStorage',
        'waypoints': 'libs/waypoints.min',
        'waypointsSticky': 'libs/waypoints-sticky',
        'bxSlider': 'libs/jquery.bxSlider.min',
        'blurjs': 'libs/blur',
        'mmPlugins': 'libs/mmPlugins',
        'async': 'libs/async'
    },

    shim: {
        'jquery': {
            exports: '$'
        },

        'underscore': {
            exports: '_'
        },

        'backbone': {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },

        'bootstrap': {
            deps: ['jquery']
        },

        'waypoints': {
            deps: ['jquery']
        },

        'bxSlider': {
            deps: ['jquery']
        },

        'mmPlugins': {
            deps: ['jquery']
        }
    }

});

require([

    'backbone',
    'app/app'

], function(Backbone, App) {

    'use strict';

    App.initialize();

});
