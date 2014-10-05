define([

    'jquery',
    'backbone',
    'app/routes/router',
    'app/views/app',
    'bootstrap'

], function($, Backbone, Router, AppView) {

    'use strict';

    var initialize = function() {

        console.log('Init');

        var appView = new AppView();

        // var gondonsCollection = new GondonsCollection([]);
        // gondonsCollection.fetch();
        //
        // window.debug = {
        //     gondons: gondonsCollection
        // };

        var router = new Router(appView); // передать вид главной модели
        Backbone.history.start();

    };

    return {
        initialize: initialize
    };
});
