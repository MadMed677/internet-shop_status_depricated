require.config({

    paths: {
        'jquery': 'libs/jquery.min',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'bootstrap': 'libs/bootstrap',
        'backbone.localStorage': 'libs/backbone-localstorage',
        'waypoint': 'libs/waypoints',
        'bxSlider': 'libs/jquery.bxSlider.min'
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

        'waypoint': {
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
