define([

    'jquery',
    'backbone',
    'app/routes/router',
    'app/views/app',
    'app/collections/gondons',
    'bootstrap'

], function($, Backbone, Router, AppView, GondonsCollection) {

    'use strict';

    var initialize = function() {

        var appView = new AppView();

        var gondonsCollection = new GondonsCollection();
        gondonsCollection.create({ title: 'Gondon 1' });
        gondonsCollection.create({ title: 'Gondon 2' });
        gondonsCollection.create({ title: 'Gondon 3' });
        gondonsCollection.fetch();

        window.debug = {
            gondons: gondonsCollection
        };

        var router = new Router(appView); // передать вид главной модели
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
