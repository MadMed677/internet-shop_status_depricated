require.config({

    paths: {
        'jquery': 'libs/jquery.min',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'bootstrap': 'libs/bootstrap',
        'backbone.localStorage': 'libs/backbone-localstorage',
        'waypoints': 'libs/waypoints.min',
        'waypointsSticky': 'libs/waypoints-sticky',
        'bxSlider': 'libs/jquery.bxSlider.min',
        'blurjs': 'libs/blur'
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
