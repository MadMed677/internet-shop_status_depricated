define([

    'jquery',
    'backbone',
    'app/routes/router',
    'app/views/app',
    'bootstrap'

], function($, Backbone, Router, AppView) {

    'use strict';

    var initialize = function() {

        var appView = new AppView();


        var router = new Router(appView); // передать вид главной модели
        Backbone.history.start();

    };

    return {
        initialize: initialize
    };
});
